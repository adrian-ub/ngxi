import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[claritySwitchLineIcon],svg[clarity-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.71 14h15.21v-2H5.71l3.71-3.73A1 1 0 1 0 8 6.86L1.89 13L8 19.14a1 1 0 1 0 1.42-1.4Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M23 12h3v2h-3z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M28 12h2v2h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M27.92 17.86a1 1 0 0 0-1.42 1.41L30.21 23H15v2h15.21l-3.71 3.74a1 1 0 1 0 1.42 1.4L34 24Z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M10 23h3v2h-3z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M6 23h2v2H6z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClaritySwitchLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
