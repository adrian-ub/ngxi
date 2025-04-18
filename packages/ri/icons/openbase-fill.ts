import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOpenbaseFillIcon],svg[ri-openbase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2.76l10 3.236l-.9 9.468l-9.1 6.86l-9.1-6.864L2.01 6zm0 .825l-8.81 2.85L12 20.793l8.806-14.358z"></svg:path>`,
})
export class RiOpenbaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
