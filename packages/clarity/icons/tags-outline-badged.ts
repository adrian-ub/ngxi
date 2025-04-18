import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTagsOutlineBadgedIcon],svg[clarity-tags-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.81" cy="11.14" r="1.33" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:circle><svg:path fill="currentColor" d="M27.78 19.17L14.2 5.58A1.92 1.92 0 0 0 12.83 5H3.61a1.93 1.93 0 0 0-1.93 1.93v9.22a1.92 1.92 0 0 0 .57 1.36L15.84 31.1a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.72M17.26 29.69L3.69 16.15V7h9.1l13.58 13.48Z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M33.16 19.13L19.58 5.55A1.92 1.92 0 0 0 18.21 5h-2.09l15.63 15.45l-10.53 10.62a1.93 1.93 0 0 0 2.73 0l9.21-9.21a1.93 1.93 0 0 0 0-2.73" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTagsOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
