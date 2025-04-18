import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrder16RegularIcon],svg[fluent-re-order-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 9h11a.5.5 0 0 1 .09.992L13.5 10h-11a.5.5 0 0 1-.09-.992zh11zm0-3h11a.5.5 0 0 1 .09.992L13.5 7h-11a.5.5 0 0 1-.09-.992zh11z"></svg:path>`,
})
export class FluentReOrder16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
