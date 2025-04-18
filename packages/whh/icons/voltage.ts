import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhVoltageIcon],svg[whh-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315 832h133l-192 192L64 832h123l142-256H0L192 0h128L171 448h341z"></svg:path>`,
})
export class WhhVoltageIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
