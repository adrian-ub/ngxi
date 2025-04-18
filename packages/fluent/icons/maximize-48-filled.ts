import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMaximize48FilledIcon],svg[fluent-maximize-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11.5A5.5 5.5 0 0 1 11.5 6h25a5.5 5.5 0 0 1 5.5 5.5v25a5.5 5.5 0 0 1-5.5 5.5h-25A5.5 5.5 0 0 1 6 36.5zM11.5 9A2.5 2.5 0 0 0 9 11.5v25a2.5 2.5 0 0 0 2.5 2.5h25a2.5 2.5 0 0 0 2.5-2.5v-25A2.5 2.5 0 0 0 36.5 9z"></svg:path>`,
})
export class FluentMaximize48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
