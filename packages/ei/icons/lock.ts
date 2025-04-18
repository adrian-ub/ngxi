import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiLockIcon],svg[ei-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 23h-2v-4c0-3.9-3.1-7-7-7s-7 3.1-7 7v4h-2v-4c0-5 4-9 9-9s9 4 9 9z"></svg:path><svg:path fill="currentColor" d="M33 40H17c-1.7 0-3-1.3-3-3V25c0-1.7 1.3-3 3-3h16c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3M17 24c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V25c0-.6-.4-1-1-1z"></svg:path><svg:circle cx="25" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M25.5 28h-1l-1 6h3z"></svg:path>`,
})
export class EiLockIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
