import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineArithmeticOneIcon],svg[icon-park-outline-arithmetic-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31.5h14m-14 8h14M7.343 40.657l11.314-11.314m-11.314 0l11.314 11.314M28 12.5h14m-36 0h14m-7-7v14"></svg:path>`,
})
export class IconParkOutlineArithmeticOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
