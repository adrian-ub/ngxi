import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSchemaIcon],svg[tabler-schema-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2h5v4H5zm10 8h5v4h-5zM5 18h5v4H5zm0-8h5v4H5zm5 2h5M7.5 6v4m0 4v4"></svg:path>`,
})
export class TablerSchemaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
