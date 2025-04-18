import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowAutofitLeftFilledIcon],svg[tabler-arrow-autofit-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 14a1 1 0 0 1-1 1H8.999v-.092a3 3 0 0 0-5.12-2.03a.515.515 0 0 1-.879-.363V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z"></svg:path><svg:path d="M21 18a1 1 0 0 1-1 1H5.416l1.291 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.097-.112l-.071-.11l-.054-.114l-.035-.105l-.03-.149L2 18l.003-.075l.017-.126l.03-.111l.044-.111l.052-.098l.067-.096l.08-.09l3-3a1 1 0 1 1 1.414 1.414L5.414 17H20a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class TablerArrowAutofitLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
