import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsOpen20FilledIcon],svg[fluent-shifts-open-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.75c0-.69.56-1.25 1.25-1.25H7.5a.75.75 0 0 0 0-1.5H5.75A2.75 2.75 0 0 0 3 5.75v8.5A2.75 2.75 0 0 0 5.75 17H7.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25zm8-2.75a.75.75 0 0 0 0 1.5h1.75c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H12.5a.75.75 0 0 0 0 1.5h1.75A2.75 2.75 0 0 0 17 14.25v-8.5A2.75 2.75 0 0 0 14.25 3zm-2 2.75a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H10.5z"></svg:path>`,
})
export class FluentShiftsOpen20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
