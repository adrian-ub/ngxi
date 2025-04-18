import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingIndentIncreaseAlignmentAlignIndentParagraphIncreaseFormattingTextIcon],svg[streamline-interface-text-formatting-indent-increase-alignment-align-indent-paragraph-increase-formatting-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H.5m13 4H6m7.5 4H6m7.5 4H.5M2 5l2 2l-2 2"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingIndentIncreaseAlignmentAlignIndentParagraphIncreaseFormattingTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
