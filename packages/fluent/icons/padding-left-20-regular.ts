import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingLeft20RegularIcon],svg[fluent-padding-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm0 3a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zm0 4a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zm0 4a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0zm2.146-4.646a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 1 1 .708.708L5.707 9H15.5a.5.5 0 0 1 0 1H5.707l3.647 3.646a.5.5 0 0 1-.708.708zM17 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentPaddingLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
