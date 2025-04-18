import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileDislikeIcon],svg[tabler-file-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 15a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm3 0a1 1 0 0 1 1-1h3.756a1 1 0 0 1 .958.713l1.2 3c.09.303.133.63-.056.884c-.188.254-.542.403-.858.403h-2v2.467a1.1 1.1 0 0 1-2.015.61L6 19zm8-12v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.5"></svg:path></svg:g>`,
})
export class TablerFileDislikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
