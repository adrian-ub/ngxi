import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsTruckIcon],svg[humbleicons-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5V16a1 1 0 0 1-1 1h-1.5m2.5-5.5h-7m7 0l-1.736-3.906A1 1 0 0 0 18.35 7H14M5.5 17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1M5.5 17a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m0 0H14m0 0h.5m-.5 0v-5.5m.5 5.5a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0M14 11.5V7"></svg:path>`,
})
export class HumbleiconsTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
