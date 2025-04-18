import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff24FilledIcon],svg[fluent-equal-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H4a1 1 0 0 0 0 2h4.94l4 4H4a1 1 0 1 0 0 2h10.94l5.78 5.78a.75.75 0 0 0 1.06-1.06zM20 14h-2.818l2 2H20a1 1 0 1 0 0-2m-8.818-6l2 2H20a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentEqualOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
