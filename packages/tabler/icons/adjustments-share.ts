import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAdjustmentsShareIcon],svg[tabler-adjustments-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-6v4m0 4v8m7.387-5.44a2 2 0 1 0-.798 3.352M12 4v10m0 4v2m4-13a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2-3v1m-2 17l5-5m0 4.5V17h-4.5M18 9v4"></svg:path>`,
})
export class TablerAdjustmentsShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
