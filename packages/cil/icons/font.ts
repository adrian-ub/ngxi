import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFontIcon],svg[cil-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M221.631 109L109.92 392h58.055l24.079-61h127.892l24.079 61h58.055L290.369 109Zm-8.261 168L256 169l42.63 108Z"></svg:path><svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path>`,
})
export class CilFontIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
