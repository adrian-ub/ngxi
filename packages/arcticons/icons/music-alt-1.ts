import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusicAlt1Icon],svg[arcticons-music-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.082 4.5v22.757a8.77 8.77 0 0 0-4.388-1.178c-4.83 0-8.745 3.9-8.744 8.712c0 4.81 3.916 8.71 8.744 8.709c4.407-.005 8.698-3.245 8.704-8.173l.028-22.163h8.624V4.5z"></svg:path>`,
})
export class ArcticonsMusicAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
