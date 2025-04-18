import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDoubleQuoteSansRightIcon],svg[cil-double-quote-sans-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280 185.143V416h216V16h-38.4ZM464 384H312V198.857L464 54.1ZM232 16h-38.4L16 185.143V416h216Zm-32 368H48V198.857L200 54.1Z"></svg:path>`,
})
export class CilDoubleQuoteSansRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
