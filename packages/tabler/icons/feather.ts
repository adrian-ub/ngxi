import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFeatherIcon],svg[tabler-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m4 20l10-10m0-5v5h5m-9-1v5h5m-9-1v5h5m-5-5l4-4l4-4"></svg:path><svg:path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13l4-4l4-4"></svg:path></svg:g>`,
})
export class TablerFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
