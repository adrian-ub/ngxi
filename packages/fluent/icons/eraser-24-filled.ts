import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEraser24FilledIcon],svg[fluent-eraser-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.87 2.669l4.968 4.968a2.25 2.25 0 0 1 0 3.182l-8.682 8.68l6.098.001a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743l-.102.007l-8.41.001a2.24 2.24 0 0 1-1.714-.655l-4.969-4.969a2.25 2.25 0 0 1 0-3.182l9.527-9.526a2.25 2.25 0 0 1 3.182 0m-4.172 15.09l-5.955-5.956l-1.507 1.467a.75.75 0 0 0 0 1.06l4.946 4.946a.75.75 0 0 0 1.06-.016z"></svg:path>`,
})
export class FluentEraser24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
