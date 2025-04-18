import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBodyScanIcon],svg[tabler-body-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2m-9-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-1 9v-1a2 2 0 1 1 4 0v1m-6-7q1 1 2 1h4q1 0 2-1m-4 1v3"></svg:path>`,
})
export class TablerBodyScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
