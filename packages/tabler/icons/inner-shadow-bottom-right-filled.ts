import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerInnerShadowBottomRightFilledIcon],svg[tabler-inner-shadow-bottom-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m6 9a1 1 0 0 0-1 1a5 5 0 0 1-5 5a1 1 0 0 0 0 2a7 7 0 0 0 7-7a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerInnerShadowBottomRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
