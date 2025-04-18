import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingParagraphBulletsPointsBulletAlignParagraphFormattingBulletsTextIcon],svg[streamline-interface-text-formatting-paragraph-bullets-points-bullet-align-paragraph-formatting-bullets-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.5 1H8m5.5 3H8m5.5 3H8m5.5 6H8m5.5-3H8"></svg:path><svg:rect width="5" height="5" x=".5" y="1" rx=".5" transform="rotate(-90 3 3.5)"></svg:rect><svg:rect width="5" height="5" x=".5" y="8" rx=".5" transform="rotate(-90 3 10.5)"></svg:rect></svg:g>`,
})
export class StreamlineInterfaceTextFormattingParagraphBulletsPointsBulletAlignParagraphFormattingBulletsTextIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
