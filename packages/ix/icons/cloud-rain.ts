import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloudRainIcon],svg[ix-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M405.333 191.999c0-58.911-47.756-106.667-106.666-106.667c-39.092 0-73.272 21.029-91.822 52.391c-14.349-6.255-30.192-9.724-46.845-9.724c-64.801 0-117.333 52.532-117.333 117.333c0 61.206 46.864 111.466 106.666 116.855v-42.944c-36.184-5.176-64-36.295-64-73.911c0-41.237 33.43-74.667 74.667-74.667c10.438 0 20.5 2.118 29.795 6.17l34.573 15.072l19.201-32.463c11.449-19.356 32.196-31.445 55.098-31.445c35.346 0 64 28.653 64 64l-.859 35.57l32.885 8.44c18.647 4.786 31.974 21.737 31.974 41.323c0 23.564-19.103 42.667-42.667 42.667h-21.333v42.666H384c47.128 0 85.333-38.205 85.333-85.333c0-39.779-27.218-73.201-64.033-82.65zm-192 106.666h-42.666v128h42.666zm21.334 42.667h42.666v128h-42.666zm106.666-42.667h-42.666v128h42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxCloudRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
