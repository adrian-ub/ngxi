import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPulseSquare24FilledIcon],svg[fluent-pulse-square-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18.752V5.25A2.25 2.25 0 0 1 5.25 3zM9.812 7.95L8.255 11.5H6.75a.75.75 0 0 0 0 1.5h1.995a.75.75 0 0 0 .687-.448l1.035-2.362l2.337 5.834a.75.75 0 0 0 1.367.057l1.542-3.08h1.537a.75.75 0 1 0 0-1.5h-2a.75.75 0 0 0-.67.414l-1.004 2.003l-2.381-5.946a.75.75 0 0 0-1.383-.023"></svg:path>`,
})
export class FluentPulseSquare24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
