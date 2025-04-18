import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSettingsBrightnessIcon],svg[ic-sharp-settings-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zm-2 16.01H3V4.99h18zM8 16h2.5l1.5 1.5l1.5-1.5H16v-2.5l1.5-1.5l-1.5-1.5V8h-2.5L12 6.5L10.5 8H8v2.5L6.5 12L8 13.5zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></svg:path>`,
})
export class IcSharpSettingsBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
