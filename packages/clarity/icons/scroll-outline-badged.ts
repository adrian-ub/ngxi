import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityScrollOutlineBadgedIcon],svg[clarity-scroll-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 13.5a7.5 7.5 0 0 1-1.92-.26v16.3a2.5 2.5 0 0 1-2.5 2.5H10.24a4.47 4.47 0 0 0 .76-2.5v-23a2.5 2.5 0 0 1 5 0v4.54h8.54a7.5 7.5 0 0 1-1.35-2H18v-2.5a4.5 4.5 0 0 0-.76-2.5h5.52a7.4 7.4 0 0 1 .86-2H13.5A4.5 4.5 0 0 0 9 6.58v23a2.5 2.5 0 1 1-5 0V26h3.19v-2H2v5.5A4.5 4.5 0 0 0 6.5 34h19.08a4.5 4.5 0 0 0 4.5-4.5v-16Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityScrollOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
