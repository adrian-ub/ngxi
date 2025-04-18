import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMedicineSyrupIcon],svg[tabler-medicine-syrup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21h8a1 1 0 0 0 1-1V10a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1m2-7h4m-2-2v4m-2-9V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3"></svg:path>`,
})
export class TablerMedicineSyrupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
