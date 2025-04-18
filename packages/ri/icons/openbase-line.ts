import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOpenbaseLineIcon],svg[ri-openbase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 5.996l1 9.464l9 7.04l9-7.04l1-9.464zm7.837 4.436L12 19.96L4.163 7.436L12 5.088z"></svg:path>`,
})
export class RiOpenbaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
