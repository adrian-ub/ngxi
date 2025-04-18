import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnLockClosedOutlineIcon],svg[typcn-lock-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="17" r="1.3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 10h-1V8c0-2.206-1.794-4-4-4S8 5.794 8 8v2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2m-7-2a2 2 0 0 1 4 0v3h-4zm7 11H7v-7h10.003z"></svg:path>`,
})
export class TypcnLockClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
