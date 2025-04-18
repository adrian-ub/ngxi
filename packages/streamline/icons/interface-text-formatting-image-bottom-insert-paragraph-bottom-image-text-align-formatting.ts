import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingImageBottomInsertParagraphBottomImageTextAlignFormattingIcon],svg[streamline-interface-text-formatting-image-bottom-insert-paragraph-bottom-image-text-align-formatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 6.5h-9m13-3H.5m13-3H.5"></svg:path><svg:rect width="4" height="13" x="5" y="5" rx=".5" transform="rotate(-90 7 11.5)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTextFormattingImageBottomInsertParagraphBottomImageTextAlignFormattingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
