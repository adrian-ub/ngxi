import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltUpIcon],svg[la-long-arrow-alt-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-6.719 6.718l1.438 1.407L15 7.938V28h2V7.937l4.281 4.282l1.438-1.406z"></svg:path>`,
})
export class LaLongArrowAltUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
