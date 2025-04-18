import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClusterOutlineBadgedIcon],svg[clarity-cluster-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10h3.5V8H4.64A1.65 1.65 0 0 0 3 9.67V32h5.5v-2H5Z" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:ellipse cx="18.01" cy="25.99" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-2--badged" rx="1.8" ry="1.79"></svg:ellipse><svg:path fill="currentColor" d="M13.5 9.21h9v1.6h-9z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M24 10.49V30H12V6h10.5a7.5 7.5 0 0 1 .28-2h-11.1A1.68 1.68 0 0 0 10 5.68V32h16V12.34a7.5 7.5 0 0 1-2-1.85" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="M31 13.43V30h-3.5v2H33V12.87a7.5 7.5 0 0 1-2 .56" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClusterOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
