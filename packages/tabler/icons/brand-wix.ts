import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandWixIcon],svg[tabler-brand-wix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 9l1.5 6l1.379-5.515a.64.64 0 0 1 1.242 0L8.5 15L10 9m3 2.5V15m3-6l5 6m0-6l-5 6m-3-6h.01"></svg:path>`,
})
export class TablerBrandWixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
