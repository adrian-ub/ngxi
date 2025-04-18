import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGbSctIcon],svg[flagpack-gb-sct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#265AAD" d="M0 0h32v24H0z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M16 14.5L1.2 25.6l-2.4-3.2L12.667 12L-1.2 1.6l2.4-3.2L16 9.5L30.8-1.6l2.4 3.2L19.333 12L33.2 22.4l-2.4 3.2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackGbSctIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
