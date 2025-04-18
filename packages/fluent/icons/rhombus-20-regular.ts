import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRhombus20RegularIcon],svg[fluent-rhombus-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.89 4.296A2 2 0 0 1 6.76 3h10.237a2 2 0 0 1 1.872 2.704l-3.76 10A2 2 0 0 1 13.238 17H3.001a2 2 0 0 1-1.872-2.704zM6.76 4a1 1 0 0 0-.936.648l-3.76 10A1 1 0 0 0 3.001 16h10.237a1 1 0 0 0 .936-.648l3.76-10A1 1 0 0 0 16.998 4z"></svg:path>`,
})
export class FluentRhombus20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
