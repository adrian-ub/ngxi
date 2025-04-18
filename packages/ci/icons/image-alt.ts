import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciImageAltIcon],svg[ci-image-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Zm0-2V4h12v12H8Z"></svg:path><svg:path fill="currentColor" d="M2 8h2v12h12v2H4a2 2 0 0 1-2-2V8Z"></svg:path><svg:path fill="currentColor" d="M10 14h9l-3.75-5.444l-2.25 3.11l-.75-.777L10 14Zm.75-5.833c0 .644.504 1.166 1.125 1.166S13 8.811 13 8.167C13 7.522 12.496 7 11.875 7s-1.125.522-1.125 1.167Z"></svg:path>`,
})
export class CiImageAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
