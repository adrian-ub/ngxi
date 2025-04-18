import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes48FilledIcon],svg[fluent-arrow-up-right-dashes-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 6a1.5 1.5 0 0 0 0 3h14.379l-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12L39 11.122V25.5a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 40.5 6zm-5.94 27.56a1.5 1.5 0 0 0-2.12-2.12l-8 8a1.5 1.5 0 0 0 2.12 2.12zm12-14.12a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12-2.12l8-8a1.5 1.5 0 0 1 2.12 0"></svg:path>`,
})
export class FluentArrowUpRightDashes48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
