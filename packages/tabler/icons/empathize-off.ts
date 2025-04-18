import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEmpathizeOffIcon],svg[tabler-empathize-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8a2.5 2.5 0 1 0-2.5-2.5m2.817 6.815l-.317.317l-.728-.727a3.088 3.088 0 1 0-4.367 4.367L12 21.368l4.689-4.69m1.324-2.673a3.087 3.087 0 0 0-3.021-3.018M3 3l18 18"></svg:path>`,
})
export class TablerEmpathizeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
