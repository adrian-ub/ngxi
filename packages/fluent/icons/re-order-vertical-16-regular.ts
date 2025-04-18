import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderVertical16RegularIcon],svg[fluent-re-order-vertical-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.5v-11a.5.5 0 0 1 .992-.09L10 2.5v11a.5.5 0 0 1-.992.09zm-3 0v-11a.5.5 0 0 1 .992-.09L7 2.5v11a.5.5 0 0 1-.992.09z"></svg:path>`,
})
export class FluentReOrderVertical16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
