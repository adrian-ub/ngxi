import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchBoldDuotoneIcon],svg[solar-map-point-search-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.25a3.75 3.75 0 1 0 2.07 6.877l.898.902a.75.75 0 0 0 1.064-1.057l-.902-.907A3.75 3.75 0 0 0 12 6.25m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointSearchBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
