import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingRight20RegularIcon],svg[fluent-padding-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.854 9.854a.5.5 0 0 0 0-.708l-4.5-4.5a.5.5 0 0 0-.708.708L14.293 9H4.5a.5.5 0 0 0 0 1h9.793l-3.647 3.646a.5.5 0 0 0 .708.708zM3 3.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0zm15 0a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm0 3a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm0 4a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm0 4a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0z"></svg:path>`,
})
export class FluentPaddingRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
