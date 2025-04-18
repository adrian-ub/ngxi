import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityScrollLineIcon],svg[clarity-scroll-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 11.12V6.58a4.5 4.5 0 0 0-4.5-4.5h-16A4.5 4.5 0 0 0 9 6.58v23a2.5 2.5 0 1 1-5 0V26h3.19v-2H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5V13.13h-2v16.41a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54Zm-4.5-7A2.5 2.5 0 0 1 32 6.58v2.54H18V6.58a4.5 4.5 0 0 0-.76-2.5Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityScrollLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
