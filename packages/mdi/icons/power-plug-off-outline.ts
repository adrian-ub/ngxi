import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPowerPlugOffOutlineIcon],svg[mdi-power-plug-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.14 5.14C6.1 8.41 6 8.7 6 9v5.5L9.5 18v3h5v-3l.81-.8l5.53 5.53zm-9.02-4.87l-.42.41h-1.34l-.41-.41L8 13.67V9.89l5.89 5.89zM12.2 9l-2-2H14V3h2v4c1 0 2 1 2 2v5.5l-.15.15L16 12.8V9.09c0-.03-.05-.09-.08-.09zM10 6.8l-2-2V3h2z"></svg:path>`,
})
export class MdiPowerPlugOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
