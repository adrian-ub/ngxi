import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNext20FilledIcon],svg[fluent-next-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.252c0-1 1.116-1.595 1.947-1.038l8.499 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752zM17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0z"></svg:path>`,
})
export class FluentNext20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
