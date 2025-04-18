import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGraph16Icon],svg[octicon-graph-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0m14.28 2.53l-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06L4.28 9.78a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042"></svg:path>`,
})
export class OcticonGraph16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
