import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfThinIcon],svg[ph-square-half-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m-68 72h72v24h-72Zm0-8V84h72v24Zm0 40h72v24h-72Zm72-92v20h-72V52h68a4 4 0 0 1 4 4M52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4m148 4h-68v-24h72v20a4 4 0 0 1-4 4"></svg:path>`,
})
export class PhSquareHalfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
