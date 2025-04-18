import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlipVertical28RegularIcon],svg[fluent-flip-vertical-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.654 2.118A.75.75 0 0 1 24 2.75v9.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.315-1.43l20.5-9.5a.75.75 0 0 1 .719.048M6.152 11.5H22.5V3.924zM24 25.25a.75.75 0 0 1-1.065.68l-20.5-9.5A.75.75 0 0 1 2.75 15h20.5a.75.75 0 0 1 .75.75z"></svg:path>`,
})
export class FluentFlipVertical28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
