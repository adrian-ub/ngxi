import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineFlashOffIcon],svg[ic-baseline-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20L19 18.73zM17 10h-4l4-8H7v2.18l8.46 8.46z"></svg:path>`,
})
export class IcBaselineFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
