import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTravelTaxiCabIcon],svg[zondicons-travel-taxi-cab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h2l4 7h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1l4-7h2V1h4zm3.86 7L13 5H7l-2.86 5zM5.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class ZondiconsTravelTaxiCabIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
