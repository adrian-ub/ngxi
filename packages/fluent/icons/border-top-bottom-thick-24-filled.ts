import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBorderTopBottomThick24FilledIcon],svg[fluent-border-top-bottom-thick-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0 2 0a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1a1 1 0 1 0 2 0a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m2 5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm.5 6.25v.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-.5a1.25 1.25 0 1 1 2.5 0V18h-.01a3.25 3.25 0 0 1-3.24 3H6.25a3.25 3.25 0 0 1-3.24-3H3v-.75a1.25 1.25 0 1 1 2.5 0M20 10a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentBorderTopBottomThick24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
