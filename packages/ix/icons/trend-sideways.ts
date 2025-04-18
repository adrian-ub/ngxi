import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendSidewaysIcon],svg[ix-trend-sideways-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M286.17 135.32L406.85 256l-15.085 15.085L286.17 376.679L256 346.51l69.156-69.177H42.667v-42.666H325.18L256 165.49z"></svg:path>`,
})
export class IxTrendSidewaysIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
