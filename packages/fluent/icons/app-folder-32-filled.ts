import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppFolder32FilledIcon],svg[fluent-app-folder-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 7A2.5 2.5 0 0 0 7 9.5v3A2.5 2.5 0 0 0 9.5 15h3a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 12.5 7zm0 10A2.5 2.5 0 0 0 7 19.5v3A2.5 2.5 0 0 0 9.5 25h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5zm10-10A2.5 2.5 0 0 0 17 9.5v3a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 22.5 7zm0 10a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5h3a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5zM3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5v17A2.5 2.5 0 0 0 7.5 27h17a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 24.5 5z"></svg:path>`,
})
export class FluentAppFolder32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
