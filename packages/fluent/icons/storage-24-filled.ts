import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage24FilledIcon],svg[fluent-storage-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h14a3 3 0 0 1 2.995 2.824L22 10v4a3 3 0 0 1-2.824 2.995L19 17H5a3 3 0 0 1-2.995-2.824L2 14v-4a3 3 0 0 1 2.824-2.995zh14zm13 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-4 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentStorage24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
