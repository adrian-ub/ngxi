import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJewelryIcon],svg[picon-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4c-4 4 6 4 2 0m0-1c7 7-9 7-2 0m1 1L2 1l2-1l2 1"></svg:path>`,
})
export class PiconJewelryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
