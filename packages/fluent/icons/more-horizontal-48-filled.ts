import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMoreHorizontal48FilledIcon],svg[fluent-more-horizontal-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m11.5 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class FluentMoreHorizontal48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
