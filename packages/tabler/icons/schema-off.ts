import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSchemaOffIcon],svg[tabler-schema-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2h4v4M6 6H5V5m10 6v-1h5v4h-2M5 18h5v4H5zm0-8h5v4H5zm5 2h2M7.5 7.5V10m0 4v4M3 3l18 18"></svg:path>`,
})
export class TablerSchemaOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
