import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFileLikeIcon],svg[tabler-file-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm3 3a1 1 0 0 0 1 1h3.756a1 1 0 0 0 .958-.713l1.2-3c.09-.303.133-.63-.056-.884C12.67 16.149 12.316 16 12 16h-2v-2.467a1.1 1.1 0 0 0-2.015-.61L6 16zm8-17v4a1 1 0 0 0 1 1h4"></svg:path><svg:path d="M5 12.1V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-2.3"></svg:path></svg:g>`,
})
export class TablerFileLikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
