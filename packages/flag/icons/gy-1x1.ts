import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGy1x1Icon],svg[flag-gy-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#399408" d="M2 0h510v512H2z"></svg:path><svg:path fill="#fff" d="M.1 0c-.6 0 495.7 257.6 495.7 257.6L0 511.7z"></svg:path><svg:path fill="#ffde08" d="M.2 21.5C3 21.5 447.5 254 445 256.2L1.5 494.2L.2 21.4z"></svg:path><svg:path fill="#000001" d="M1.5.8c1.5 0 232.8 257 232.8 257L1.5 508.8z"></svg:path><svg:path fill="#de2110" d="M.2 36.2C1.6 20.2 209 258.5 209 258.5L.2 481.8z"></svg:path></svg:g>`,
})
export class FlagGy1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
