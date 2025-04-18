import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phYinYangLightIcon],svg[ph-yin-yang-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26M38 128a90.1 90.1 0 0 1 90-90a42 42 0 0 1 0 84a54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128m90 90a42 42 0 0 1 0-84a54 54 0 0 0 44.88-84A90 90 0 0 1 128 218m10-42a10 10 0 1 1-10-10a10 10 0 0 1 10 10m-20-96a10 10 0 1 1 10 10a10 10 0 0 1-10-10"></svg:path>`,
})
export class PhYinYangLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
