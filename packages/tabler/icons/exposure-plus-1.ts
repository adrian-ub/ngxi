import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposurePlus1Icon],svg[tabler-exposure-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h6M6 9v6m12 4V5l-4 4"></svg:path>`,
})
export class TablerExposurePlus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
