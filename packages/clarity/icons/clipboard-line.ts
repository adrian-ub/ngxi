import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClipboardLineIcon],svg[clarity-clipboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.29 5H27v2h2v25H7V7h2V5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V6.69A1.7 1.7 0 0 0 29.29 5" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M26 7.33A2.34 2.34 0 0 0 23.67 5h-1.8a4 4 0 0 0-7.75 0h-1.79A2.34 2.34 0 0 0 10 7.33V11h16ZM24 9H12V7.33a.33.33 0 0 1 .33-.33H16V6a2 2 0 0 1 4 0v1h3.67a.33.33 0 0 1 .33.33Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M11 14h14v2H11z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M11 18h14v2H11z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M11 22h14v2H11z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M11 26h14v2H11z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClipboardLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
