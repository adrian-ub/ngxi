import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumBurgerIcon],svg[circum-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.325 11.015a7.344 7.344 0 0 0-14.66 0a2.014 2.014 0 0 0-1.6 1.96v.16a2.016 2.016 0 0 0 1.64 1.97l.27 2.45a2.593 2.593 0 0 0 2.59 2.32h8.87a2.593 2.593 0 0 0 2.59-2.32l.27-2.45a2.016 2.016 0 0 0 1.64-1.97v-.16a2 2 0 0 0-1.61-1.96M12 5.125a6.365 6.365 0 0 1 6.34 5.85H5.665A6.36 6.36 0 0 1 12 5.125m6.04 12.32a1.6 1.6 0 0 1-1.6 1.43H7.565a1.6 1.6 0 0 1-1.6-1.43l-.26-2.31H18.3Zm1.9-4.31a1 1 0 0 1-1 1H5.065a1 1 0 0 1-1-1v-.16a1 1 0 0 1 1-1h13.87a1 1 0 0 1 1 1Z"></svg:path><svg:circle cx="12" cy="6.622" r=".5" fill="currentColor"></svg:circle><svg:circle cx="8.323" cy="8.323" r=".5" fill="currentColor"></svg:circle><svg:circle cx="15.676" cy="8.323" r=".5" fill="currentColor"></svg:circle>`,
})
export class CircumBurgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
