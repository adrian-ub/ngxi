import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantIcon],svg[ix-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v192l149.334-69.333V256L448 185.882V448H64V64zm-42.666 258.85v82.483h298.666V253.035L256 323.17v-69.645z"></svg:path>`,
})
export class IxPlantIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
