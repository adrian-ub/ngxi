import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingImageLeftAlignmentWrapFormattingParagraphImageLeftTextIcon],svg[streamline-interface-text-formatting-image-left-alignment-wrap-formatting-paragraph-image-left-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 1H9m4.5 3H9m4.5 3H9m4.5 6H.5m13-3H.5"></svg:path><svg:rect width="6" height="6" x=".5" y="1" rx=".5"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTextFormattingImageLeftAlignmentWrapFormattingParagraphImageLeftTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
