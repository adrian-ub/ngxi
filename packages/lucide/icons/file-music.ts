import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileMusicIcon],svg[lucide-file-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"></svg:path><svg:path d="M8 18v-7.7L16 9v7"></svg:path><svg:circle cx="14" cy="16" r="2"></svg:circle><svg:circle cx="6" cy="18" r="2"></svg:circle></svg:g>`
})
export class LucideFileMusicIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
