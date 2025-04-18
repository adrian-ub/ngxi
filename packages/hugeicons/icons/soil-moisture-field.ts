import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoilMoistureFieldIcon],svg[hugeicons-soil-moisture-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 3c1.864 0 2.796 0 3.53.304A4 4 0 0 1 7.697 5.47C8 6.204 8 7.136 8 9c-1.864 0-2.796 0-3.53-.304A4 4 0 0 1 2.303 6.53C2 5.796 2 4.864 2 3m10 2c-1.242 0-1.864 0-2.354.203c-.653.27-1.172.79-1.443 1.443C8 7.136 8 7.757 8 9c1.243 0 1.864 0 2.354-.203a2.67 2.67 0 0 0 1.443-1.443C12 6.864 12 6.243 12 5M8 9v5m4 0H2m10 3H2m10 3H2m14-1.497c0-1.255 1.053-2.495 1.792-3.211a1.004 1.004 0 0 1 1.416 0c.739.716 1.792 1.956 1.792 3.211C21 19.734 20.053 21 18.5 21S16 19.734 16 18.503" color="currentColor"></svg:path>`,
})
export class HugeiconsSoilMoistureFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
