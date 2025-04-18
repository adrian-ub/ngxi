import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTablet32RegularIcon],svg[fluent-tablet-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM5.25 5A3.25 3.25 0 0 0 2 8.25v15.5A3.25 3.25 0 0 0 5.25 27h21.5A3.25 3.25 0 0 0 30 23.75V8.25A3.25 3.25 0 0 0 26.75 5zM4 8.25C4 7.56 4.56 7 5.25 7h21.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25H5.25C4.56 25 4 24.44 4 23.75z"></svg:path>`,
})
export class FluentTablet32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
