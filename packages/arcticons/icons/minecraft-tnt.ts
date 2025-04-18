import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftTntIcon],svg[arcticons-minecraft-tnt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45L5.756 34.467V13.533L24 24.066z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24.066L5.756 13.533L24 3l18.243 10.533z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.243 34.467L24 45V24.066l18.243-10.533zM24 29.994L5.757 19.461m0 9.078L24 39.072M8.651 23.507l2.913 1.682m-1.457 3.456v-4.297m7.824 4.517l2.912 1.681m-1.456 3.456v-4.296m-6.096.777v-4.297l2.912 5.994v-4.297m26.04-8.422L24 29.994m0 9.078l18.243-10.533m-15.348 2.159l2.912-1.682m-1.456 5.138v-4.297m7.823-4.517l2.913-1.681m-1.456 5.137v-4.297"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.535 32.316v-4.297l2.912 2.631v-4.297M20.768 15.399l6.464-3.732m-6.484-.012l6.504 3.756"></svg:path>`,
})
export class ArcticonsMinecraftTntIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
