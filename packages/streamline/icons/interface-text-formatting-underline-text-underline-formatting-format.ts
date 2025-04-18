import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingUnderlineTextUnderlineFormattingFormatIcon],svg[streamline-interface-text-formatting-underline-text-underline-formatting-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5.5v6.75a4.25 4.25 0 0 0 4.25 4.25h0A4.25 4.25 0 0 0 11 7.25V.5m-9.5 13h11"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingUnderlineTextUnderlineFormattingFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
