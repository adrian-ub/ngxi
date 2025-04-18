import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardTab20RegularIcon],svg[fluent-keyboard-tab-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.354 4.146a.5.5 0 1 0-.708.708L13.293 9.5H3.5a.5.5 0 0 0 0 1h9.793l-4.647 4.646a.5.5 0 0 0 .708.708l5.5-5.5a.5.5 0 0 0 0-.708zM17 4.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentKeyboardTab20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
