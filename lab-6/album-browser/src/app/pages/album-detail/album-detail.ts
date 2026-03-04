import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  title = '';
  loading = false;
  saving = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (!id) {
        this.album = null;
        this.error = 'Invalid album id';
        this.loading = false;
        return;
      }
      this.fetchAlbum(id);
    });
  }

  fetchAlbum(id: number): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.title = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album';
        this.loading = false;
      },
    });
  }

  save(): void {
    if (!this.album) return;

    this.saving = true;
    this.error = '';

    const updated: Album = { ...this.album, title: this.title };

    this.albumService.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album = data;
      },
      error: () => {
        this.error = 'Failed to update album';
      },
      complete: () => {
        this.saving = false;
      },
    });
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}
