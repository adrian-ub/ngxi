import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingJustifiedAlignJustifiedAlignAlignmentParagraphFormattingTextIcon],svg[streamline-interface-text-formatting-justified-align-justified-align-alignment-paragraph-formatting-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 1H.5m13 3H.5m13 3H.5m13 6H.5m13-3H.5"></svg:path>`,
})
export class StreamlineInterfaceTextFormattingJustifiedAlignJustifiedAlignAlignmentParagraphFormattingTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
