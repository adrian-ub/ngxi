import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAdd32FilledIcon],svg[fluent-add-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2.75c.69 0 1.25.56 1.25 1.25v10.75H28a1.25 1.25 0 1 1 0 2.5H17.25V28a1.25 1.25 0 1 1-2.5 0V17.25H4a1.25 1.25 0 1 1 0-2.5h10.75V4c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class FluentAdd32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
