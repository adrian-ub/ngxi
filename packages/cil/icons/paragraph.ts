import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilParagraphIcon],svg[cil-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 64H208a128 128 0 0 0 0 256h56v128h112V96h64ZM264 288h-56a96 96 0 0 1 0-192h56Zm80 128h-48V96h48Z"></svg:path>`,
})
export class CilParagraphIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
