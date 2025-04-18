import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBhimSbiPayIcon],svg[arcticons-bhim-sbi-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.878 4.5A2.11 2.11 0 0 0 9.77 6.608v34.784a2.11 2.11 0 0 0 2.108 2.108h24.244a2.11 2.11 0 0 0 2.108-2.108V6.608A2.11 2.11 0 0 0 36.122 4.5ZM9.77 37.8h28.46M24 39.908v-4.216"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.591 26.218l2.4-2.4l-2.4-2.401m2.4 2.401H18.009m2.4-8.725l-2.4 2.4l2.4 2.401m-2.4-2.401h11.982"></svg:path>`,
})
export class ArcticonsBhimSbiPayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
