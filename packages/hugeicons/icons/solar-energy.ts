import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSolarEnergyIcon],svg[hugeicons-solar-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91c.314-.087.47-.131.555-.038c.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406c.087.314.131.47.038.555c-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91c-.314.087-.47.131-.555.038c-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406c-.087-.314-.131-.47-.038-.555c.094-.085.248-.022.558.102L4.5 15M15 12a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1.5M12 15a3 3 0 0 1-3-3m3 3v1.5M9 12a3 3 0 0 1 3-3m-3 3H7.5M12 9V7.5m2.121 2.379l1.061-1.061m-5.303 5.303l-1.061 1.061m5.303-1.06l1.061 1.06M9.879 9.879L8.818 8.818" color="currentColor"></svg:path>`,
})
export class HugeiconsSolarEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
