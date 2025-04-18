import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNestCamWiredStandIcon],svg[ic-sharp-nest-cam-wired-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 .85l-6.02.55C8.95 1.7 6.37 4 6.04 7.03a6.36 6.36 0 0 0 5.68 7.04l1.9.19l-.56.85c-.88-.19-1.83-.18-2.85.25c-2 .85-3.21 2.89-3.21 5.05V23h10v-3c0-1.67-.83-3.15-2.09-4.06l.97-1.45l2.12.23z"></svg:path>`,
})
export class IcSharpNestCamWiredStandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
