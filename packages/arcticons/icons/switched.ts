import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwitchedIcon],svg[arcticons-switched-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="29.549" height="7.811" x="10.723" y="35.689" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.905" ry="3.905"></svg:rect><svg:rect width="27.808" height="7.811" x="12.458" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.905" ry="3.905"></svg:rect><svg:rect width="19.409" height="7.811" x="8.988" y="12.311" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.905" ry="3.905"></svg:rect><svg:rect width="28.502" height="7.811" x="7.729" y="20.121" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.905" ry="3.905"></svg:rect><svg:rect width="15.845" height="7.811" x="15.375" y="27.932" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.905" ry="3.905"></svg:rect>`,
})
export class ArcticonsSwitchedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
