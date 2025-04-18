import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeviceTabletLightIcon],svg[ph-device-tablet-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26H64a22 22 0 0 0-22 22v160a22 22 0 0 0 22 22h128a22 22 0 0 0 22-22V48a22 22 0 0 0-22-22M54 70h148v116H54Zm10-32h128a10 10 0 0 1 10 10v10H54V48a10 10 0 0 1 10-10m128 180H64a10 10 0 0 1-10-10v-10h148v10a10 10 0 0 1-10 10"></svg:path>`,
})
export class PhDeviceTabletLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
