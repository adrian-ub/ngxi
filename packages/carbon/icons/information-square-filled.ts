import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInformationSquareFilledIcon],svg[carbon-information-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8m4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"></svg:path>`,
})
export class CarbonInformationSquareFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
