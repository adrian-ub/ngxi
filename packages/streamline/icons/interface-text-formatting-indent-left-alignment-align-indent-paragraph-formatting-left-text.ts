import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingIndentLeftAlignmentAlignIndentParagraphFormattingLeftTextIcon],svg[streamline-interface-text-formatting-indent-left-alignment-align-indent-paragraph-formatting-left-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1.5h-6m4 4h-4m6 4h-6m4 4h-4M.5 5l2 2l-2 2M5 13.5V.5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingIndentLeftAlignmentAlignIndentParagraphFormattingLeftTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
