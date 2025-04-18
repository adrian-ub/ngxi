import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons123Icon],svg[arcticons-123-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 20.684l2.278-1.24v9.112m3.659-6.094a3.022 3.022 0 0 1 3.618-2.96c1.266.243 2.277 1.337 2.403 2.62c.094.955-.208 1.896-.868 2.475c-1.22 1.071-5.153 3.96-5.153 3.96h6.038m3.558-.769c.63.527 1.309.769 2.834.769h.355a2.28 2.28 0 0 0 2.278-2.278h0A2.28 2.28 0 0 0 32.222 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.032 20.205c.63-.526 1.31-.765 2.836-.761l.354.002a2.28 2.28 0 0 1 2.278 2.277h0a2.28 2.28 0 0 1-2.278 2.278m-1.751 0h1.751"></svg:path>`,
})
export class Arcticons123Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
