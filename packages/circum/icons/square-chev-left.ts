import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumSquareChevLeftIcon],svg[circum-square-chev-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.21 12l2.64 2.65a.495.495 0 0 1-.7.7c-.13-.12-.25-.24-.38-.37c-.87-.87-1.75-1.75-2.62-2.63a.49.49 0 0 1 0-.7l3-3a.495.495 0 0 1 .7.7Z"></svg:path><svg:path fill="currentColor" d="M18.437 20.939H5.562a2.5 2.5 0 0 1-2.5-2.5V5.566a2.5 2.5 0 0 1 2.5-2.5h12.875a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5M5.562 4.066a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.875a1.5 1.5 0 0 0 1.5-1.5V5.566a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class CircumSquareChevLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
