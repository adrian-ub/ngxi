import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PanoFillIcon],svg[f7-pano-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.711 47.486c4.11 0 10.339-4.86 24.278-4.86c13.94 0 20.213 4.838 24.3 4.838c2.408 0 3.711-1.48 3.711-3.932V13.599c0-2.474-1.303-3.954-3.711-3.954c-4.087 0-10.36 4.86-24.3 4.86c-13.917 0-20.191-4.86-24.278-4.86C1.303 9.645 0 11.125 0 13.577v29.977c0 2.452 1.303 3.932 3.711 3.932"></svg:path>`,
})
export class F7PanoFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
