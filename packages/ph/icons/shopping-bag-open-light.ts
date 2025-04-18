import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShoppingBagOpenLightIcon],svg[ph-shopping-bag-open-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2m-42-90a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class PhShoppingBagOpenLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
