import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceInformationDeskSymbolIcon],svg[guidance-information-desk-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 7V5M9 9.5h3v8m0 0H8m4 0h4m-4 6C5.649 23.5.5 18.351.5 12S5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5Z"></svg:path>`,
})
export class GuidanceInformationDeskSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
