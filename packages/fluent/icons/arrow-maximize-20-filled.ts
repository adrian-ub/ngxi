import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMaximize20FilledIcon],svg[fluent-arrow-maximize-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v5.25a.75.75 0 0 1-1.5 0V5.559L5.559 15.5H9.25a.75.75 0 0 1 0 1.5H4a1 1 0 0 1-1-1v-5.25a.75.75 0 0 1 1.5 0v3.689L14.439 4.5H10.75a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class FluentArrowMaximize20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
