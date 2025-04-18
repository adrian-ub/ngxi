import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowsAllDirection2Icon],svg[mage-arrows-all-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.375 20.375L3.625 3.625m11.163 16.75h5.587v-5.587M3.625 9.212V3.625h5.587M3.625 14.788v5.587h5.587m5.576-16.75h5.587v5.587M3.625 20.375l16.75-16.75"></svg:path>`,
})
export class MageArrowsAllDirection2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
