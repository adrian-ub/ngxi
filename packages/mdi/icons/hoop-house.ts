import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHoopHouseIcon],svg[mdi-hoop-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C6.5 5 2 9.5 2 15v6h20v-6c0-5.5-4.5-10-10-10m0 2c2.53 0 4.78 1.17 6.25 3H5.76C7.22 8.17 9.47 7 12 7M8 19H4v-4c0-1.06.21-2.07.58-3H8zm6 0h-4v-7h4zm6 0h-4v-7h3.42c.37.93.58 1.94.58 3z"></svg:path>`,
})
export class MdiHoopHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
