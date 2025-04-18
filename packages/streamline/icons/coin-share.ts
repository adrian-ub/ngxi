import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoinShareIcon],svg[streamline-coin-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 8.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-3v-2M.5 11l2.444 2.036a2 2 0 0 0 1.28.464h6.443c.46 0 .833-.373.833-.833c0-.92-.746-1.667-1.667-1.667H5.354"></svg:path><svg:path d="m3.5 10l.75.75a1.06 1.06 0 0 0 1.5-1.5L4.586 8.086A2 2 0 0 0 3.172 7.5H.5"></svg:path></svg:g>`,
})
export class StreamlineCoinShareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
