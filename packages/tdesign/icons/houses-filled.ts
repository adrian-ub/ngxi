import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHousesFilledIcon],svg[tdesign-houses-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.997 1.658l10.416 9.259l-1.329 1.495l-1.083-.963v10.55H15.5V15h-7v7H4V11.454l-1.093.957l-1.317-1.505L6 7.046V3h2v2.254z"></svg:path><svg:path fill="currentColor" d="M10.5 22v-5h3v5z"></svg:path>`,
})
export class TdesignHousesFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
