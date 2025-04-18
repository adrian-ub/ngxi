import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVegetableBasketIcon],svg[icon-park-solid-vegetable-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 14H7.378a3 3 0 0 0-2.98 3.354L7.12 40.236A2 2 0 0 0 9.105 42h30.368a2 2 0 0 0 1.991-1.807l2.218-22.904A3 3 0 0 0 40.696 14H38M5 22h38m-28 7h18m-16 7h14"></svg:path><svg:path fill="currentColor" d="M24 6c-4.418 0-8 6.925-8 15.467q0 .267.005.533h15.99q.005-.266.005-.533C32 12.925 28.418 6 24 6"></svg:path></svg:g>`,
})
export class IconParkSolidVegetableBasketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
