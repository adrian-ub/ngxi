import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiPowerPanelLogoIcon],svg[cbi-power-panel-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9.994 9.994 0 0 0-6.963 17.169V12a6.95 6.95 0 0 1 4.82-6.592v3.779a3.551 3.551 0 1 0 4.286 0V5.409a6.942 6.942 0 1 1-4.7 13.053v3.2A10 10 0 1 0 12 2m1.326 9.881h-2.652V3.533h2.652z" class="cls-1"></svg:path>`,
})
export class CbiPowerPanelLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
