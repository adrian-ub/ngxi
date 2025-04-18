import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarHopperIcon],svg[mdi-train-car-hopper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8v9h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V8zm12 7v-4h-2v4H8v-4H6v4H3v-5h18v5h-3v-4h-2v4z"></svg:path>`,
})
export class MdiTrainCarHopperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
