import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSliderHorizontalSquareAdjustControlsFaderHorizontalSettingsSliderSquareIcon],svg[streamline-interface-setting-slider-horizontal-square-adjust-controls-fader-horizontal-settings-slider-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M3 4.5h5"></svg:path><svg:circle cx="9.5" cy="4.5" r="1.5"></svg:circle><svg:path d="M11 9.5H8m-3 0H3"></svg:path><svg:circle cx="6.5" cy="9.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceSettingSliderHorizontalSquareAdjustControlsFaderHorizontalSettingsSliderSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
