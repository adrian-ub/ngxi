import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEmpathizeIcon],svg[tabler-empathize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 5.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 21.368l5.095-5.096a3.088 3.088 0 1 0-4.367-4.367l-.728.727l-.728-.727a3.088 3.088 0 1 0-4.367 4.367z"></svg:path>`,
})
export class TablerEmpathizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
