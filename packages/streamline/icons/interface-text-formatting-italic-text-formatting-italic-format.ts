import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingItalicTextFormattingItalicFormatIcon],svg[streamline-interface-text-formatting-italic-text-formatting-italic-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 13.5l5-13m-4 0H13m-12 13h7.5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingItalicTextFormattingItalicFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
