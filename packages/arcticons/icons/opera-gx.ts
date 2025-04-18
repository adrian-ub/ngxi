import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOperaGxIcon],svg[arcticons-opera-gx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.519 5.16A18.84 18.84 0 0 0 12.68 24h0a18.647 18.647 0 0 0 22.185 18.501A21.45 21.45 0 0 0 34.9 5.473a19 19 0 0 0-3.38-.312Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.624 9.362a18.842 18.842 0 0 1-.012 29.286"></svg:path>`,
})
export class ArcticonsOperaGxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
