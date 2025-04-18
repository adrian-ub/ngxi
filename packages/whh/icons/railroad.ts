import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRailroadIcon],svg[whh-railroad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 1024q-26.5 0-45-18.5T640 960H128q0 26-19 45t-45.5 19t-45-18.5T0 960L192 32q0-6 .5-10.5t2-8t2-5.5t3-3.5T203 2t5-1.5t5-.5h22l5 .5l5 1.5l3.5 2.5l3 3.5l2 5.5l2 8L256 32l-4 32h264l-4-32q0-6 .5-10.5t1.5-8t2-5.5t3.5-3.5T523 2t5-1.5t5-.5h22l5 .5l5 1.5l3.5 2.5l3 3.5l2 5.5l2 8L576 32l192 928q0 27-19 45.5t-45.5 18.5M234 192l-18 128h336l-18-128zm335 256H199l-18 128h406zm36 256H163l-17 128h476z"></svg:path>`,
})
export class WhhRailroadIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
