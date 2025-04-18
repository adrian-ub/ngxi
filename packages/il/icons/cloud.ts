import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilCloudIcon],svg[il-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M556 123q36 0 68 13t55 38t38 55t13 68t-13 67t-38 56t-55 37t-68 14H139q-29 0-54-11t-44-30t-30-44t-11-54t11-55t30-44t44-29t54-11h12l11 2v-2q0-39 15-73t39-59t59-40t72-14q60 0 107 33t67 87q15-4 35-4"></svg:path>`,
})
export class IlCloudIcon {
  readonly viewBox = input("0 0 730 710")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
