import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCameraBitcoinIcon],svg[tabler-camera-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1"></svg:path><svg:path d="M14.477 11.307A3 3 0 1 0 12 16m5 5v-6m2 0v-1.5m0 9V21m-2-3h3m-1 0h.5a1.5 1.5 0 0 1 0 3H16"></svg:path><svg:path d="M19 18h.5a1.5 1.5 0 0 0 0-3H16"></svg:path></svg:g>`,
})
export class TablerCameraBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
