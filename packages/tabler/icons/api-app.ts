import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerApiAppIcon],svg[tabler-api-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 2v6.5a2.5 2.5 0 1 1-5 0V18m2-9h6.5a2.5 2.5 0 1 1 0 5H18m-9-2V5.5a2.5 2.5 0 0 1 5 0V6"></svg:path>`,
})
export class TablerApiAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
