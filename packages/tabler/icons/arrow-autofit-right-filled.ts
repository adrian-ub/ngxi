import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowAutofitRightFilledIcon],svg[tabler-arrow-autofit-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 14a1 1 0 0 0 1 1h11.001v-.092a3 3 0 0 1 5.12-2.03a.515.515 0 0 0 .879-.363V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z"></svg:path><svg:path d="M3 18a1 1 0 0 0 1 1h14.584l-1.291 1.293a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.414 0l3-3q.054-.053.097-.112l.071-.11l.054-.114l.035-.105l.03-.149L22 18l-.003-.075l-.017-.126l-.03-.111l-.044-.111l-.052-.098l-.067-.096l-.08-.09l-3-3a1 1 0 0 0-1.414 1.414L18.586 17H4a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class TablerArrowAutofitRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
