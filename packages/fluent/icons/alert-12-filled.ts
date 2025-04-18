import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlert12FilledIcon],svg[fluent-alert-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a4 4 0 0 0-4 4v1.382l-.947 1.894A.5.5 0 0 0 1.5 9h9a.5.5 0 0 0 .447-.724L10 6.382V5a4 4 0 0 0-4-4m0 10.5A2 2 0 0 1 4.063 10h3.874A2 2 0 0 1 6 11.5"></svg:path>`,
})
export class FluentAlert12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
