import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownLineDuotoneIcon],svg[solar-map-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 5.527c-.25 0-.5-.061-.73-.184L5.368 2.191c-1.388-.74-2.87.81-2.202 2.306l7.362 16.51c.296.662.884.993 1.473.993"></svg:path><svg:path d="M12 5.527c.25 0 .5-.061.73-.184l5.903-3.152c1.388-.74 2.87.81 2.202 2.306l-7.363 16.51C13.178 21.67 12.59 22 12 22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
