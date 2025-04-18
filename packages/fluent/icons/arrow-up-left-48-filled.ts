import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft48FilledIcon],svg[fluent-arrow-up-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 6a1.5 1.5 0 0 1 0 3H11.121l30.44 30.44a1.5 1.5 0 0 1-2.122 2.12L9 11.122V25.5a1.5 1.5 0 0 1-3 0v-18A1.5 1.5 0 0 1 7.5 6z"></svg:path>`,
})
export class FluentArrowUpLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
