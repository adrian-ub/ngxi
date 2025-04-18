import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCardsThreeFillIcon],svg[ph-cards-three-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 104v96a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M56 72h144a8 8 0 0 0 0-16H56a8 8 0 0 0 0 16m16-32h112a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16"></svg:path>`,
})
export class PhCardsThreeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
