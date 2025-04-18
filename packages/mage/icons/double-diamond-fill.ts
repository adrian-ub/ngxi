import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDoubleDiamondFillIcon],svg[mage-double-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.993 8.351L15.65 3.007a5.17 5.17 0 0 0-7.297 0L3.007 8.35a5.17 5.17 0 0 0 0 7.297l5.345 5.345a5.17 5.17 0 0 0 7.297 0l5.344-5.344a5.17 5.17 0 0 0 0-7.298m-5.045 5.413l-2.184 2.175a2.47 2.47 0 0 1-1.76.734a2.5 2.5 0 0 1-1.768-.734l-2.174-2.175a2.513 2.513 0 0 1 0-3.528l2.174-2.174a2.56 2.56 0 0 1 3.528 0l2.184 2.184a2.513 2.513 0 0 1 0 3.528z"></svg:path>`,
})
export class MageDoubleDiamondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
