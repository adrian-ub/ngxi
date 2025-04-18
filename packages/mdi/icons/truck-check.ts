import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTruckCheckIcon],svg[mdi-truck-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h14v4h3l3 4v5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V6a2 2 0 0 1 2-2m14 5.5V12h4.47L19.5 9.5zm-11 6A1.5 1.5 0 0 0 4.5 17A1.5 1.5 0 0 0 6 18.5A1.5 1.5 0 0 0 7.5 17A1.5 1.5 0 0 0 6 15.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M8 14l6-6l-1.41-1.42L8 11.17L5.91 9.08L4.5 10.5z"></svg:path>`,
})
export class MdiTruckCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
