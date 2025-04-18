import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLongArrowAltDownIcon],svg[la-long-arrow-alt-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063l-4.281-4.282l-1.438 1.407L16 27.905l6.719-6.718l-1.438-1.407L17 24.063V4z"></svg:path>`,
})
export class LaLongArrowAltDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
