import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMobilePhoneFillIcon],svg[mage-mobile-phone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.165 2h-8.35a2.59 2.59 0 0 0-2.56 2.61v14.78A2.59 2.59 0 0 0 7.815 22h8.37a2.59 2.59 0 0 0 2.56-2.61V4.61A2.59 2.59 0 0 0 16.165 2m-4.18 17.77a1.52 1.52 0 1 1-.02-3.04a1.52 1.52 0 0 1 .02 3.04m2-13.5h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageMobilePhoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
