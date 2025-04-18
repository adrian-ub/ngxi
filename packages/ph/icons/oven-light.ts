import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOvenLightIcon],svg[ph-oven-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14m2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM74 76a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m44 0a10 10 0 1 1 10 10a10 10 0 0 1-10-10m22 30H72a6 6 0 0 0-6 6v72a6 6 0 0 0 6 6h112a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6m-6 72H78v-60h100Z"></svg:path>`,
})
export class PhOvenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
