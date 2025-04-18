import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsBluetoothIcon],svg[fa6-brands-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M292.6 171.1L249.7 214l-.3-86zm-43.2 219.8l43.1-43.1l-42.9-42.9zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4S115.4 0 228.6 0S416 53.9 416 259.4m-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9l92.7 93l-92.7 93l26.9 26.9l73.8-73.8l2.3 170l127.4-127.5z"></svg:path>`,
})
export class Fa6BrandsBluetoothIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
