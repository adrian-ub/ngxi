import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextWrapOff24FilledIcon],svg[fluent-text-wrap-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L3.94 5H3a1 1 0 0 0 0 2h2.94l4 4H3a1 1 0 1 0 0 2h8.94l2.322 2.323l-1.97 1.97a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.415-1.414L15.414 19h2.525l2.78 2.78a.75.75 0 0 0 1.061-1.06zM14.181 11H19a4 4 0 0 1 2.39 7.208l-1.445-1.445A2 2 0 0 0 19 13h-2.819zm-4-4l-2-2H21a1 1 0 1 1 0 2zM2 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"></svg:path>`,
})
export class FluentTextWrapOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
