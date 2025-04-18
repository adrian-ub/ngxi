import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerApiAppOffIcon],svg[tabler-api-app-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6m9 5v3.5a2.5 2.5 0 1 1-5 0V18m3-9h5.5a2.5 2.5 0 1 1 0 5H18m-9-2V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18"></svg:path>`,
})
export class TablerApiAppOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
