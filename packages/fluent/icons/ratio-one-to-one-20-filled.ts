import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRatioOneToOne20FilledIcon],svg[fluent-ratio-one-to-one-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h10.5A2.75 2.75 0 0 0 18 13.25v-6.5A2.75 2.75 0 0 0 15.25 4zM7 7.5v5a.5.5 0 0 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 7 7.5m7 0v5a.5.5 0 1 1-1 0V8.309l-.276.138a.5.5 0 1 1-.447-.894l1-.5A.5.5 0 0 1 14 7.5m-4 1a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M9.5 12a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentRatioOneToOne20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
