import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiPowerInputIcon],svg[zmdi-power-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h405v43H0zm0 128v-43h107v43zm149 0v-43h107v43zm150 0v-43h106v43z"></svg:path>`,
})
export class ZmdiPowerInputIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
