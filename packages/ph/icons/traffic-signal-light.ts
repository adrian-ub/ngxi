import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrafficSignalLightIcon],svg[ph-traffic-signal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 58a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m0 32a30 30 0 1 0 30 30a30 30 0 0 0-30-30m0 48a18 18 0 1 1 18-18a18 18 0 0 1-18 18m88-40h-18V78h18a6 6 0 0 0 0-12h-18V40a14 14 0 0 0-14-14H72a14 14 0 0 0-14 14v26H40a6 6 0 0 0 0 12h18v68H40a6 6 0 0 0 0 12h18v58a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14v-58h18a6 6 0 0 0 0-12m-30 70a2 2 0 0 1-2 2H72a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class PhTrafficSignalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
