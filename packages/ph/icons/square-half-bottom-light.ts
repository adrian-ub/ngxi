import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBottomLightIcon],svg[ph-square-half-bottom-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2m50 80v68H86v-68Zm12 0h20v68h-20Zm32 0h20v68h-20Zm-96 66v-66h20v68H56a2 2 0 0 1-2-2m146 2h-18v-68h20v66a2 2 0 0 1-2 2"></svg:path>`,
})
export class PhSquareHalfBottomLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
