import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingImageRightParagraphImageTextAlignmentWrapRightFormattingIcon],svg[streamline-interface-text-formatting-image-right-paragraph-image-text-alignment-wrap-right-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 1H5M.5 4H5M.5 7H5M.5 13h13m-13-3h13"></svg:path><svg:rect width="6" height="6" x="7.5" y="1" rx=".5" transform="rotate(-180 10.5 4)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTextFormattingImageRightParagraphImageTextAlignmentWrapRightFormattingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
