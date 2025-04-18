import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPawIcon],svg[meteor-icons-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="4" cy="8" r="3"></svg:circle><svg:circle cx="12" cy="4" r="3"></svg:circle><svg:circle cx="20" cy="8" r="3"></svg:circle><svg:path d="M5 16a1 1 0 0 0 5 6q2-1 4 0a1 1 0 0 0 5-6l-3-3q-4-4-8 0Z"></svg:path></svg:g>`,
})
export class MeteorIconsPawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
