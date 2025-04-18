import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhone32RegularIcon],svg[fluent-phone-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2A3.25 3.25 0 0 0 7 5.25v21.5A3.25 3.25 0 0 0 10.25 30h11.5A3.25 3.25 0 0 0 25 26.75V5.25A3.25 3.25 0 0 0 21.75 2zM9 5.25C9 4.56 9.56 4 10.25 4h11.5c.69 0 1.25.56 1.25 1.25v21.5c0 .69-.56 1.25-1.25 1.25h-11.5C9.56 28 9 27.44 9 26.75zM14 24a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentPhone32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
