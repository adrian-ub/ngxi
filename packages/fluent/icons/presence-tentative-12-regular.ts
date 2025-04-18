import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceTentative12RegularIcon],svg[fluent-presence-tentative-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.055A6 6 0 0 1 6.057 12zm-.35-2.082a6 6 0 0 0-.844-1.568l-8.4 8.4c.474.354 1.001.64 1.569.844zM1.191 9.587a6 6 0 0 1-.84-1.561L8.027.35a6 6 0 0 1 1.562.84zM5.945 0A6 6 0 0 0 .001 5.944z"></svg:path>`,
})
export class FluentPresenceTentative12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
