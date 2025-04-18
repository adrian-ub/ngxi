import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelNumberedListIcon],svg[pixel-numbered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h1v2H4zm0-3h1v1H2V8h1V6H2V5h1V4h1zm0 2v1H3v1H2v-2zm1 6v5H2v-1h2v-1H3v-1h1v-1H2v-1zm-2-3h1v1h1v1H2v-1h1zm6-7h14v1H9zm0 6h14v1H9zm0 6h14v1H9z"></svg:path>`,
})
export class PixelNumberedListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
