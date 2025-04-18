import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsRefreshCircle1ClockwiseIcon],svg[lineicons-refresh-circle-1-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.136 9.542a.75.75 0 1 0 1.45.388a8 8 0 0 1 15.251-.644l-1.675-.943a.75.75 0 1 0-.736 1.307l3.08 1.735a.75.75 0 0 0 1.022-.286l1.735-3.08a.75.75 0 0 0-1.307-.737l-.761 1.352a9.5 9.5 0 0 0-18.059.908m18.354 4.916a.75.75 0 1 0-1.448-.388a8 8 0 0 1-15.25.651l1.663.936a.75.75 0 0 0 .736-1.307l-3.08-1.734a.75.75 0 0 0-1.022.285l-1.735 3.081a.75.75 0 1 0 1.307.736l.767-1.362a9.5 9.5 0 0 0 18.063-.898"></svg:path>`,
})
export class LineiconsRefreshCircle1ClockwiseIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
