import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChevronDoubleRightIcon],svg[cil-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m503.933 255.933l.041-.041l-68.081-68.082l-6.221-6.175l-5.122-5.085L315.516 67.516l-79.462 79.463L345.075 256L236.054 365.021l79.462 79.463l109.021-109.021l.041.041l.067-.067l68.081-68.082L504 256Zm-188.417 143.3l-34.207-34.208L390.33 256L281.309 146.979l34.207-34.208l97.707 97.707l11.355 11.273L458.827 256l-34.249 34.249l-.041-.041l-.067.067Z"></svg:path><svg:path fill="currentColor" d="m282.792 256l-.067-.067l.041-.041l-68.082-68.082L203.4 176.6L94.308 67.516l-79.463 79.463L123.866 256L14.845 365.021l79.463 79.463L203.4 335.4l.041.041l68.082-68.082ZM203.3 290.316l-.041-.041L94.308 399.229L60.1 365.021L169.121 256L60.1 146.979l34.208-34.208l97.707 97.707l11.279 11.2L237.619 256Z"></svg:path>`,
})
export class CilChevronDoubleRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
