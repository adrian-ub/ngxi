import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd48FilledIcon],svg[fluent-add-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5a1.5 1.5 0 0 1 1.5 1.5v16h16a1.5 1.5 0 0 1 0 3h-16v16a1.5 1.5 0 0 1-3 0v-16h-16a1.5 1.5 0 0 1 0-3h16v-16A1.5 1.5 0 0 1 24 5"></svg:path>`,
})
export class FluentAdd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
