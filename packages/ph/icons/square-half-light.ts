import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfLightIcon],svg[ph-square-half-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m-66 76h68v20h-68Zm0-12V86h68v20Zm0 44h68v20h-68Zm68-94v18h-68V54h66a2 2 0 0 1 2 2M54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2m146 2h-66v-20h68v18a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSquareHalfLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
