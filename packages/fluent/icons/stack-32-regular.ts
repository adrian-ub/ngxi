import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStack32RegularIcon],svg[fluent-stack-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm5.17 20A3 3 0 0 0 13 28h6c6.074 0 11-4.925 11-11v-2a3 3 0 0 0-2-2.83V17a9 9 0 0 1-9 9zM9 24a3 3 0 0 1-2.83-2H19a5 5 0 0 0 5-5V8.17c1.164.412 2 1.524 2 2.83v6a7 7 0 0 1-7 7z"></svg:path>`,
})
export class FluentStack32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
