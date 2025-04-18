import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowAutofitLeftIcon],svg[tabler-arrow-autofit-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m0 4H3m3-3l-3 3l3 3"></svg:path>`,
})
export class TablerArrowAutofitLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
