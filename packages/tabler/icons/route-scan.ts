import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRouteScanIcon],svg[tabler-route-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M7 12V9h3m4 0h3v3"></svg:path><svg:path d="m7 9l4.414 4.414A2 2 0 0 1 12 14.828V17m5-8l-4.414 4.414A2 2 0 0 0 12 14.828V17"></svg:path></svg:g>`,
})
export class TablerRouteScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
