import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPendulumIcon],svg[hugeicons-pendulum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 3h18M6.5 3v13m5-13v13"></svg:path><svg:circle cx="6.5" cy="18.5" r="2.5"></svg:circle><svg:circle cx="11.5" cy="18.5" r="2.5"></svg:circle><svg:circle cx="19.5" cy="18.5" r="2.5"></svg:circle><svg:path d="M19.5 16L17 3"></svg:path></svg:g>`,
})
export class HugeiconsPendulumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
