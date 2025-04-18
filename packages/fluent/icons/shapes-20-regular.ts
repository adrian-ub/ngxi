import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes20RegularIcon],svg[fluent-shapes-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3a4.5 4.5 0 0 0-.5 8.973v1.005A5.5 5.5 0 1 1 12.978 7h-1.005A4.5 4.5 0 0 0 7.5 3m3 5A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8zM9 10.5A1.5 1.5 0 0 1 10.5 9h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5z"></svg:path>`,
})
export class FluentShapes20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
