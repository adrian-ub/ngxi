import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleCircleFillIcon],svg[mage-double-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 0 0 0-20.5m0 15.119a4.869 4.869 0 1 1 0-9.738a4.869 4.869 0 0 1 0 9.738"></svg:path>`,
})
export class MageDoubleCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
