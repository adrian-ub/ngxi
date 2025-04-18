import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAhnlabV3PlusIcon],svg[arcticons-ahnlab-v3-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.097v27.806l27.807-27.806M20.72 22.684H33l-5.658 5.658h3.952c1.423 0 2.135 1.72 1.129 2.726l-6.835 6.835m12.71-7.609v-8.405m-4.203 4.202H42.5"></svg:path>`,
})
export class ArcticonsAhnlabV3PlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
