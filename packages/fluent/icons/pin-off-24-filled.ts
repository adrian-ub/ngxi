import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPinOff24FilledIcon],svg[fluent-pin-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l5.905 5.905L4.81 10.33a1.25 1.25 0 0 0-.476 2.065L7.439 15.5L3 19.94V21h1.06l4.44-4.44l3.105 3.105a1.25 1.25 0 0 0 2.065-.476l1.145-3.313l5.905 5.904a.75.75 0 0 0 1.06-1.06zm17.074 9.942l-3.34 1.67l-6.846-6.846l1.67-3.34a2.75 2.75 0 0 1 4.405-.714l4.825 4.826a2.75 2.75 0 0 1-.714 4.404"></svg:path>`,
})
export class FluentPinOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
