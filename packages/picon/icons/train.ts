import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTrainIcon],svg[picon-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v1h1V3M2 3v1h1V3M2 1v1h4V1M3 5L0 8V7l2-2l-1-1V1l1-1h4l1 1v3L6 5l2 2v1L5 5"></svg:path>`,
})
export class PiconTrainIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
