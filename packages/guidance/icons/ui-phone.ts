import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUiPhoneIcon],svg[guidance-ui-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5.5V2A1.5 1.5 0 0 0 11 3.5h2A1.5 1.5 0 0 0 14.5 2V.5m-4.5 20h4M4.5.75S5 7.492 5 12s-.5 11.25-.5 11.25v.25h15v-.25S19 16.508 19 12S19.5.75 19.5.75V.5h-15z"></svg:path>`,
})
export class GuidanceUiPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
