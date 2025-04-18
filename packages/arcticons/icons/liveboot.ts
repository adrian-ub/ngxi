import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLivebootIcon],svg[arcticons-liveboot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 6.884h39m-39 34.232h39m-39-4.279h39M4.5 24h39m-39 4.279h14.838M4.5 32.558h14.838M4.5 15.442h25.365M4.5 11.163h25.365M4.5 19.721h25.365"></svg:path>`,
})
export class ArcticonsLivebootIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
