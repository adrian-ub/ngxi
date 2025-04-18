import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeMore24FilledIcon],svg[fluent-home-more-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.44 2.532a2.25 2.25 0 0 0-2.903.002l-6.74 5.698A2.25 2.25 0 0 0 3 9.95v9.3c0 .966.784 1.75 1.75 1.75h14.5A1.75 1.75 0 0 0 21 19.25v-9.3a2.25 2.25 0 0 0-.8-1.72zM9 11.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m4.25 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m4.25 0a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-8.5 4a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m4.25 0a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5"></svg:path>`,
})
export class FluentHomeMore24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
