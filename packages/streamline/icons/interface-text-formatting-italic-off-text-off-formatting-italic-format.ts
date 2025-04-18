import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingItalicOffTextOffFormattingItalicFormatIcon],svg[streamline-interface-text-formatting-italic-off-text-off-formatting-italic-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.24 6.24L4 13.5m-2.5 0h5M5 .5h7.5a1 1 0 0 1 1 1V3M.5.5l13 13M8 .5L7.23 3"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingItalicOffTextOffFormattingItalicFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
