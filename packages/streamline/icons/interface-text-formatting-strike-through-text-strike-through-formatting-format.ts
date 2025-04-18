import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingStrikeThroughTextStrikeThroughFormattingFormatIcon],svg[streamline-interface-text-formatting-strike-through-text-strike-through-formatting-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.08 8.67a2.73 2.73 0 0 1-.42 3.95a5.06 5.06 0 0 1-5.37.21l-.9-.51m6.61-11C8 .33 4.23-.26 3.38 2.54a2.47 2.47 0 0 0 .55 2.38a11.8 11.8 0 0 0 2.6 1.54M.5 6.5h13"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingStrikeThroughTextStrikeThroughFormattingFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
