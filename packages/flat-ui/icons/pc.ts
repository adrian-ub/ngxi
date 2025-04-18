import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiPcIcon],svg[flat-ui-pc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#23475F" d="M91 62V5a5 5 0 0 0-5-5H14a5 5 0 0 0-5 5v57H0v3a4 4 0 0 0 4 4h92a4 4 0 0 0 4-4v-3z"></svg:path><svg:path fill="#3498DB" d="M14 5h72v51H14z"></svg:path><svg:path fill="#9ACCED" d="M58 19H43v4h15zm-25 8v2h35v-2zm0 6h35v-2H33zm0 4h35v-2H33zm5 5.001h25V40H38z"></svg:path><svg:path fill="#1C394C" d="M9 60h82v2H9z"></svg:path><svg:path fill="#BCC4C8" d="M74.5 64a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 74.5 64m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 79.5 64m5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 84.5 64"></svg:path>`,
})
export class FlatUiPcIcon {
  readonly viewBox = input("0 0 100 69")
  readonly width = input("1.45em")
  readonly height = input("1em")
}
