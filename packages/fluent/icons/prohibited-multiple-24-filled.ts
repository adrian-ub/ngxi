import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProhibitedMultiple24FilledIcon],svg[fluent-prohibited-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.05 6.05a7 7 0 0 1 9.143-.657l-9.8 9.8A7 7 0 0 1 6.05 6.05m.757 10.557l9.8-9.8a7.001 7.001 0 0 1-9.8 9.8M17.364 4.636A9 9 0 1 0 4.636 17.364A9 9 0 0 0 17.364 4.636M21 11c0 5.523-4.477 10-10 10a10 10 0 0 1-2.834-.407A9 9 0 0 0 20.593 8.166c.265.898.407 1.85.407 2.834"></svg:path>`,
})
export class FluentProhibitedMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
