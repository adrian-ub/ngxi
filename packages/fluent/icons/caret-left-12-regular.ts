import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretLeft12RegularIcon],svg[fluent-caret-left-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.994c0-.887-1.07-1.334-1.7-.712L4.26 5.288a1 1 0 0 0 0 1.425L6.3 8.719c.63.621 1.7.174 1.7-.713zM4.963 6L7 3.994v4.012z"></svg:path>`,
})
export class FluentCaretLeft12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
