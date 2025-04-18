import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComment28FilledIcon],svg[fluent-comment-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 3A3.75 3.75 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.296c0 1.427 1.616 2.254 2.774 1.419L16.309 21h5.941A3.75 3.75 0 0 0 26 17.25V6.75A3.75 3.75 0 0 0 22.25 3z"></svg:path>`,
})
export class FluentComment28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
