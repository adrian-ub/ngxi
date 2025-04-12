import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidMusicNoteIcon],svg[heroicons-solid-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v9.114A4.4 4.4 0 0 0 5 14c-1.657 0-3 .895-3 2s1.343 2 3 2s3-.895 3-2V7.82l8-1.6v5.894A4.4 4.4 0 0 0 15 12c-1.657 0-3 .895-3 2s1.343 2 3 2s3-.895 3-2z"></svg:path>`
})
export class HeroiconsSolidMusicNoteIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
