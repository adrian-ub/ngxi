import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsShiftLeftIcon],svg[lineicons-shift-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.078 4.5a.75.75 0 0 0-1.5 0v16a.75.75 0 0 0 1.5 0zm2.5 8.002c0-.216.091-.41.238-.548l4.606-4.61a.75.75 0 0 1 1.061 1.061l-3.344 3.347h10.19a.75.75 0 1 1 0 1.5H10.142l3.34 3.343a.75.75 0 1 1-1.06 1.06L7.85 13.08a.75.75 0 0 1-.272-.578"></svg:path>`,
})
export class LineiconsShiftLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
