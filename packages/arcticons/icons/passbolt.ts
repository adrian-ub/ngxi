import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPassboltIcon],svg[arcticons-passbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="31.541" height="31.541" x="8.23" y="8.23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.352" transform="rotate(45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 28.359V24"></svg:path><svg:circle cx="7.859" cy="24" r="4.359" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.491 24H12.218"></svg:path>`,
})
export class ArcticonsPassboltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
