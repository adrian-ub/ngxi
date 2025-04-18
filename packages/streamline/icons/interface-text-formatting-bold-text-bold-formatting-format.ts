import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingBoldTextBoldFormattingFormatIcon],svg[streamline-interface-text-formatting-bold-text-bold-formatting-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 3.5a3 3 0 0 0-3-3H4a1 1 0 0 0-1 1v5h5a3 3 0 0 0 3-3Zm1 6.5a3.5 3.5 0 0 1-3.5 3.5H4a1 1 0 0 1-1-1v-6h5.5A3.5 3.5 0 0 1 12 10Z"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingBoldTextBoldFormattingFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
