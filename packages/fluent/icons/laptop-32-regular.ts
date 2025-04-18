import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptop32RegularIcon],svg[fluent-laptop-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 6A3.25 3.25 0 0 0 4 9.25v9.5A3.25 3.25 0 0 0 7.25 22h17.5A3.25 3.25 0 0 0 28 18.75v-9.5A3.25 3.25 0 0 0 24.75 6zM6 9.25C6 8.56 6.56 8 7.25 8h17.5c.69 0 1.25.56 1.25 1.25v9.5c0 .69-.56 1.25-1.25 1.25H7.25C6.56 20 6 19.44 6 18.75zM3 24a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentLaptop32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
