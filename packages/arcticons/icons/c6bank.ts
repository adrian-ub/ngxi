import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsC6bankIcon],svg[arcticons-c6bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 19.6v18.9a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.147 26.635v.065a5.3 5.3 0 0 1-5.3 5.3h0a5.3 5.3 0 0 1-5.3-5.3v-5.4a5.3 5.3 0 0 1 5.3-5.3h0a5.3 5.3 0 0 1 5.3 5.3v.065"></svg:path><svg:circle cx="31.153" cy="26.7" r="5.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.984 17.951C35.101 16.795 33.755 16 31.524 16h-.371a5.3 5.3 0 0 0-5.3 5.3v5.4"></svg:path>`,
})
export class ArcticonsC6bankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
