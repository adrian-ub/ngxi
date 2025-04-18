import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVpnhIcon],svg[arcticons-vpnh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.354 28.12v-8.24h2.698c1.525 0 2.762 1.239 2.762 2.767s-1.237 2.768-2.762 2.768h-2.698m7.773 2.705v-8.24l5.459 8.24v-8.24m2.454 0v8.24m5.46-8.24v8.24m-5.46-4.135h5.46M14.96 19.88l-2.73 8.24l-2.73-8.24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsVpnhIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
