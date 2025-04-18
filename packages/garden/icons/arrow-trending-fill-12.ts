import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowTrendingFill12Icon],svg[garden-arrow-trending-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.501 2a.5.5 0 0 1 .492.41L12 2.5v3a.5.5 0 0 1-.788.41l-.066-.056l-.793-.794l-3.147 3.147a1 1 0 0 1-1.32.083l-.094-.083L4.5 6.915L1.707 9.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l3.5-3.5a1 1 0 0 1 1.32-.083l.094.083L6.5 6.085l2.439-2.44l-.792-.791a.5.5 0 0 1 .268-.847L8.501 2z"></svg:path>`,
})
export class GardenArrowTrendingFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
