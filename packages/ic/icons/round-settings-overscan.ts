import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSettingsOverscanIcon],svg[ic-round-settings-overscan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 7L10 9h4zM17 10v4l2-1.99zM7 10l-2 2.01L7 14zm7 5h-4l2.01 2zm6-11H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z"></svg:path>`,
})
export class IcRoundSettingsOverscanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
