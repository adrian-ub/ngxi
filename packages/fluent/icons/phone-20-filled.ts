import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone20FilledIcon],svg[fluent-phone-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2A1.5 1.5 0 0 0 5 3.5v13A1.5 1.5 0 0 0 6.5 18h7a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 13.5 2zM9 14h2a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentPhone20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
