import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMonitorTrendIcon],svg[ix-monitor-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m106.667 64l-.173 343.395L448 405.333V448H64l.173-384zM448 128v128h-42.667v-56.633l-107.44 96.696l-52.56-52.543l-102.248 102.232l-30.17-30.17l132.418-132.419l54.102 54.085l74.003-66.582H320V128z"></svg:path>`,
})
export class IxMonitorTrendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
