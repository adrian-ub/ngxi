import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCompassAltIcon],svg[el-compass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M175.736 1024.264c234.315 234.314 614.213 234.314 848.527 0s234.314-614.212 0-848.527c-234.314-234.314-614.212-234.314-848.527 0c-234.314 234.314-234.314 614.212 0 848.527m94.931-65.618l-29.261-29.262l261.125-426.853l426.853-261.125l29.261 29.261l-261.124 426.854z"></svg:path>`,
})
export class ElCompassAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
