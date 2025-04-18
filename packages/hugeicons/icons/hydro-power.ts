import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHydroPowerIcon],svg[hugeicons-hydro-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91c.314-.087.47-.131.555-.038c.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406c.087.314.131.47.038.555c-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91c-.314.087-.47.131-.555.038c-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406c-.087-.314-.131-.47-.038-.555c.094-.085.248-.022.558.102L4.5 15M8 12.755c0-1.883 1.685-3.743 2.868-4.818a1.684 1.684 0 0 1 2.264 0C14.315 9.013 16 10.873 16 12.756c0 1.846-1.515 3.745-4 3.745s-4-1.899-4-3.745" color="currentColor"></svg:path>`,
})
export class HugeiconsHydroPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
