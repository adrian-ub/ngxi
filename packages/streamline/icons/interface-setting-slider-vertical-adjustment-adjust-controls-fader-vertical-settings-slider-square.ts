import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSliderSquareIcon],svg[streamline-interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1" transform="rotate(-90 7 7)"></svg:rect><svg:path d="M4.5 11V6"></svg:path><svg:circle cx="4.5" cy="4.5" r="1.5"></svg:circle><svg:path d="M9.5 3v3m0 3v2"></svg:path><svg:circle cx="9.5" cy="7.5" r="1.5"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSliderSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
