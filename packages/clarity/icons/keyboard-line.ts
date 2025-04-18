import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityKeyboardLineIcon],svg[clarity-keyboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 8H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 18H4V10h28Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M7 13h2v2H7z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M11 13h2v2h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M15 13h2v2h-2z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M19 13h2v2h-2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M23 13h2v2h-2z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M27 13h2v2h-2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M7 17h2v2H7z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M11 17h2v2h-2z" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="currentColor" d="M15 17h2v2h-2z" class="clr-i-outline clr-i-outline-path-10"></svg:path><svg:path fill="currentColor" d="M19 17h2v2h-2z" class="clr-i-outline clr-i-outline-path-11"></svg:path><svg:path fill="currentColor" d="M23 17h2v2h-2z" class="clr-i-outline clr-i-outline-path-12"></svg:path><svg:path fill="currentColor" d="M27 17h2v2h-2z" class="clr-i-outline clr-i-outline-path-13"></svg:path><svg:path fill="currentColor" d="M27 22h1.94v2H27z" class="clr-i-outline clr-i-outline-path-14"></svg:path><svg:path fill="currentColor" d="M7 22h2v2H7z" class="clr-i-outline clr-i-outline-path-15"></svg:path><svg:path fill="currentColor" d="M11.13 22h13.75v2H11.13z" class="clr-i-outline clr-i-outline-path-16"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityKeyboardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
