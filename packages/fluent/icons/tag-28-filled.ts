import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag28FilledIcon],svg[fluent-tag-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.987 3.952A3.25 3.25 0 0 1 15.285 3h6.965A2.75 2.75 0 0 1 25 5.75v6.964a3.25 3.25 0 0 1-.952 2.299l-9.25 9.25a3.25 3.25 0 0 1-4.597 0l-6.464-6.465a3.25 3.25 0 0 1 0-4.596zM19.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentTag28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
