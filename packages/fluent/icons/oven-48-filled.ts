import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentOven48FilledIcon],svg[fluent-oven-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6a6 6 0 0 0-6 6v5.5h36V12a6 6 0 0 0-6-6zm6 6.25a2 2 0 1 1-4 0a2 2 0 0 1 4 0m8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4M6 20v16a6 6 0 0 0 6 6h24a6 6 0 0 0 6-6V20zm6.75 3.5h22.5c.967 0 1.75.784 1.75 1.75v10A1.75 1.75 0 0 1 35.25 37h-22.5A1.75 1.75 0 0 1 11 35.25v-10c0-.966.784-1.75 1.75-1.75"></svg:path>`,
})
export class FluentOven48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
