import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingTextStrikeThroughTextStrikeThroughFormattingFormatIcon],svg[streamline-interface-text-formatting-text-strike-through-text-strike-through-formatting-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 .5V5m-2.5 8.5h5M1.5 3V1.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1V3m-11 4.5h11M7 7.5v6"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingTextStrikeThroughTextStrikeThroughFormattingFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
