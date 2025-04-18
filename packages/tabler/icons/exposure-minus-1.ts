import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExposureMinus1Icon],svg[tabler-exposure-minus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h6m9 7V5l-4 4"></svg:path>`,
})
export class TablerExposureMinus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
