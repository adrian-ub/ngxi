import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRenewableEnergyIcon],svg[hugeicons-renewable-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91c.314-.087.47-.131.555-.038c.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406c.087.314.131.47.038.555c-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91c-.314.087-.47.131-.555.038c-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406c-.087-.314-.131-.47-.038-.555c.094-.085.248-.022.558.102L4.5 15m4.113-3.335l3.499-4.492c.274-.351.787-.132.787.336v3.476c0 .28.2.508.449.508h1.702c.386 0 .592.514.337.842l-3.499 4.492c-.274.351-.787.132-.787-.336v-3.476c0-.28-.2-.508-.449-.508H8.95c-.386 0-.593-.514-.337-.842" color="currentColor"></svg:path>`,
})
export class HugeiconsRenewableEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
