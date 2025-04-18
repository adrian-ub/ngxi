import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiNameBadgeIcon],svg[openmoji-name-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="m52.158 7.41l-7.652 17.148L36.156 7l-8.222 17.557L19.45 7.474S6.652 23.664 6.652 38.801S22.32 65 35.84 65h.761c13.52 0 27.965-11.064 27.965-26.2S52.158 7.41 52.158 7.41"></svg:path><svg:path fill="#d22f27" d="M25.452 31.01h26.506a2.92 2.92 0 0 1 2.918 2.918v17.133a2.92 2.92 0 0 1-2.918 2.919H20.832a2.92 2.92 0 0 1-2.919-2.918V38.549a7.54 7.54 0 0 1 7.539-7.539"></svg:path><svg:rect width="33.071" height="19.731" x="19.022" y="31.726" fill="#fff" rx="2.918" ry="2.918"></svg:rect><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m52.158 7.41l-7.652 17.148L36.156 7l-8.222 17.557L19.45 7.474S6.652 23.664 6.652 38.801S22.32 65 35.84 65h.761c13.52 0 27.965-11.064 27.965-26.2S52.158 7.41 52.158 7.41"></svg:path><svg:rect width="33.071" height="19.731" x="19.022" y="31.726" rx="2.918" ry="2.918"></svg:rect></svg:g>`,
})
export class OpenmojiNameBadgeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
