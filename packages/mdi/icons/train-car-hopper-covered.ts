import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarHopperCoveredIcon],svg[mdi-train-car-hopper-covered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9V7H1v2l1 1.33V15H1v2h1a2 2 0 1 0 4 0h4l1 1h2l1-1h4a2 2 0 1 0 4 0h1v-2h-1v-4.67zM4 15v-2l1.5 2zm1-5V9h14v1zm15 5h-1.5l1.5-2z"></svg:path>`,
})
export class MdiTrainCarHopperCoveredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
