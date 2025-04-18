import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowTrendingFill16Icon],svg[garden-arrow-trending-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 3a.5.5 0 0 1 .492.41L16 3.5v4a.5.5 0 0 1-.788.41l-.066-.056l-1.292-1.293l-4.147 4.146a1 1 0 0 1-1.32.083l-.094-.083L6 8.415l-4.293 4.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094l5-5a1 1 0 0 1 1.32-.083l.094.083L9 8.585l3.439-3.439l-1.293-1.292a.5.5 0 0 1 .268-.847L11.5 3z"></svg:path>`,
})
export class GardenArrowTrendingFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
