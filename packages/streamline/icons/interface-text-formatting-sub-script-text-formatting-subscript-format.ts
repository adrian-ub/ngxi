import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingSubScriptTextFormattingSubscriptFormatIcon],svg[streamline-interface-text-formatting-sub-script-text-formatting-subscript-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1 .5l7 8m0-8l-7 8m9.5 2.5v-.25a1.25 1.25 0 0 1 1.25-1.25h0A1.25 1.25 0 0 1 13 10.75a1.58 1.58 0 0 1-.59 1.25l-1.91 1.5H13"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingSubScriptTextFormattingSubscriptFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
