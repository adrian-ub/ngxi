import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityCalendarLineIcon],svg[clarity-calendar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M8 14h2v2H8z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M14 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M20 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M26 14h2v2h-2z" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="currentColor" d="M8 19h2v2H8z" class="clr-i-outline clr-i-outline-path-6"></svg:path><svg:path fill="currentColor" d="M14 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-7"></svg:path><svg:path fill="currentColor" d="M20 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-8"></svg:path><svg:path fill="currentColor" d="M26 19h2v2h-2z" class="clr-i-outline clr-i-outline-path-9"></svg:path><svg:path fill="currentColor" d="M8 24h2v2H8z" class="clr-i-outline clr-i-outline-path-10"></svg:path><svg:path fill="currentColor" d="M14 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-11"></svg:path><svg:path fill="currentColor" d="M20 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-12"></svg:path><svg:path fill="currentColor" d="M26 24h2v2h-2z" class="clr-i-outline clr-i-outline-path-13"></svg:path><svg:path fill="currentColor" d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-14"></svg:path><svg:path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-outline clr-i-outline-path-15"></svg:path><svg:path fill="currentColor" d="M13 6h10v2H13z" class="clr-i-outline clr-i-outline-path-16"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityCalendarLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
