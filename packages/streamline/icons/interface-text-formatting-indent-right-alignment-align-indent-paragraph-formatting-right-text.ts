import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingIndentRightAlignmentAlignIndentParagraphFormattingRightTextIcon],svg[streamline-interface-text-formatting-indent-right-alignment-align-indent-paragraph-formatting-right-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 1.5h6m-4 4h4m-6 4h6m-4 4h4m7-8.5l-2 2l2 2M9 13.5V.5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingIndentRightAlignmentAlignIndentParagraphFormattingRightTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
