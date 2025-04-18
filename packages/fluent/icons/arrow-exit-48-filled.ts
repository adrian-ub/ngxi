import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit48FilledIcon],svg[fluent-arrow-exit-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 6A6.5 6.5 0 0 0 6 12.5v23a6.5 6.5 0 0 0 6.5 6.5h18a1.5 1.5 0 0 0 0-3h-18A3.5 3.5 0 0 1 9 35.5v-23A3.5 3.5 0 0 1 12.5 9h18a1.5 1.5 0 0 0 0-3zm22.56 8.44a1.5 1.5 0 0 0-2.12 2.12l5.939 5.94H17.5a1.5 1.5 0 0 0 0 3h21.379l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12l8.5-8.5a1.5 1.5 0 0 0 0-2.12z"></svg:path>`,
})
export class FluentArrowExit48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
