import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAlignCenterIcon],svg[la-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7v2h26V7zm4 4v2h18v-2zm-4 4v2h26v-2zm4 4v2h18v-2zm-4 4v2h26v-2z"></svg:path>`,
})
export class LaAlignCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
