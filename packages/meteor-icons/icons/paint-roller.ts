import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaintRollerIcon],svg[meteor-icons-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="4" height="6" x="10" y="16" rx="2"></svg:rect><svg:rect width="16" height="6" x="3" y="2" rx="2"></svg:rect><svg:path d="M19 5h1q2 0 2 2q0 6-7 6q-3 0-3 3"></svg:path></svg:g>`,
})
export class MeteorIconsPaintRollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
