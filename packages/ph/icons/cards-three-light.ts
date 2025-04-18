import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeLightIcon],svg[ph-cards-three-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 90H48a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-96a14 14 0 0 0-14-14m2 110a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-96a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM50 64a6 6 0 0 1 6-6h144a6 6 0 0 1 0 12H56a6 6 0 0 1-6-6m16-32a6 6 0 0 1 6-6h112a6 6 0 0 1 0 12H72a6 6 0 0 1-6-6"></svg:path>`,
})
export class PhCardsThreeLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
