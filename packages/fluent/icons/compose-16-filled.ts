import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCompose16FilledIcon],svg[fluent-compose-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.75A2.75 2.75 0 0 1 4.75 2h4.49a.75.75 0 1 1 0 1.5H4.75c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V6.748a.75.75 0 0 1 1.5 0v4.502A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25zm12.78-3.53a.75.75 0 0 1 0 1.06l-7.5 7.505L6 10l.22-1.275l7.5-7.505a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentCompose16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
