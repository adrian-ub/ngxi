import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNote28RegularIcon],svg[fluent-note-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h8.507a3.75 3.75 0 0 0 2.652-1.098l5.993-5.993A3.75 3.75 0 0 0 25 15.257V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25V15h-4.75A3.75 3.75 0 0 0 15 18.75v4.75H6.75a2.25 2.25 0 0 1-2.25-2.25zm12 16.376V18.75a2.25 2.25 0 0 1 2.25-2.25h4.376a2.3 2.3 0 0 1-.285.348l-5.993 5.993a2.3 2.3 0 0 1-.348.285"></svg:path>`,
})
export class FluentNote28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
