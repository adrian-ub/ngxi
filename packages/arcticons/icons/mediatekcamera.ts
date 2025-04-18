import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMediatekcameraIcon],svg[arcticons-mediatekcamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.9 40a1.54 1.54 0 0 1-1.4-1.1V11.82A2.23 2.23 0 0 1 6.81 10h34.48a2.06 2.06 0 0 1 2.21 1.41V39c-.1.4-.1.9-.9 1.1Z"></svg:path><svg:circle cx="38.79" cy="15.13" r="2.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.41 7.38h4.51v2.54H7.41z"></svg:path><svg:circle cx="23.95" cy="25.25" r="12.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.95" cy="25.25" r="5.31" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.65 22.15a3.24 3.24 0 0 0-2.71 2"></svg:path>`,
})
export class ArcticonsMediatekcameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
