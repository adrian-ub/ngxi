import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFilterIcon],svg[whh-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992.06 128l-355 439l-61 393q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5l-61-393l-355-439l-23-32q-9-15-9-32q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45q0 17-9 32z"></svg:path>`,
})
export class WhhFilterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
