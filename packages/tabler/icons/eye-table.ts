import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeTableIcon],svg[tabler-eye-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18h-.011M12 18h-.011M16 18h-.011M4 3h16M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3m-5 4h-4m-1 8h1m4 0h1m-3-4V7"></svg:path>`,
})
export class TablerEyeTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
