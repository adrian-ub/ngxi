import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAssetPathSolidIcon],svg[bubbles-asset-path-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.12 8.606a.857.857 0 0 0 0-1.212L13.836 5.11a.857.857 0 0 0-1.211 1.211l.331.331a.3.3 0 0 1 .069.32a.29.29 0 0 1-.263.172h-6.39a.857.857 0 0 0 0 1.714h6.389a.29.29 0 0 1 .263.172a.3.3 0 0 1-.069.32l-.331.33a.857.857 0 0 0 1.211 1.212z"></svg:path><svg:path d="M13.23 12.857a2.53 2.53 0 0 1-1.818-.754a2.57 2.57 0 0 1-.754-1.303a.274.274 0 0 0-.274-.229H6.372a2.571 2.571 0 1 1 0-5.142h4.057a.27.27 0 0 0 .229-.229c.103-.494.35-.948.708-1.303a2.53 2.53 0 0 1 1.818-.754a.1.1 0 0 0 .08 0a.09.09 0 0 0 0-.092a7.428 7.428 0 1 0 0 10.012a.09.09 0 0 0 0-.092a.09.09 0 0 0-.035-.114"></svg:path></svg:g>`,
})
export class BubblesAssetPathSolidIcon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
