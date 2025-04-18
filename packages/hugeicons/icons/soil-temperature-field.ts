import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoilTemperatureFieldIcon],svg[hugeicons-soil-temperature-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3c1.864 0 2.796 0 3.53.304A4 4 0 0 1 8.697 5.47C9 6.204 9 7.136 9 9c-1.864 0-2.796 0-3.53-.304A4 4 0 0 1 3.303 6.53C3 5.796 3 4.864 3 3m10 2c-1.242 0-1.864 0-2.354.203c-.653.27-1.172.79-1.443 1.443C9 7.136 9 7.757 9 9c1.242 0 1.864 0 2.354-.203a2.67 2.67 0 0 0 1.443-1.443C13 6.864 13 6.243 13 5M9 9v5m4 0H3m10 3H3m10 3H3m16 1a3 3 0 0 0 2.365-4.846c-.504-.645-.756-.967-.81-1.125s-.055-.366-.055-.781V10.5a1.5 1.5 0 0 0-3 0v3.748c0 .415 0 .622-.055.78c-.054.159-.306.481-.81 1.126A3 3 0 0 0 19 21" color="currentColor"></svg:path>`,
})
export class HugeiconsSoilTemperatureFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
