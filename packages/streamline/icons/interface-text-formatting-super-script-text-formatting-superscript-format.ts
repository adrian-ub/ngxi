import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingSuperScriptTextFormattingSuperscriptFormatIcon],svg[streamline-interface-text-formatting-super-script-text-formatting-superscript-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m1 5.5l7 8m0-8l-7 8M10.5 2v-.25A1.25 1.25 0 0 1 11.75.5h0A1.25 1.25 0 0 1 13 1.75A1.58 1.58 0 0 1 12.41 3L10.5 4.5H13"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingSuperScriptTextFormattingSuperscriptFormatIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
