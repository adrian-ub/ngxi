import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSliderIcon],svg[streamline-interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2" cy="4.5" r="1.5"></svg:circle><svg:path d="M2 6v7.5m0-13V3"></svg:path><svg:circle cx="12" cy="4.5" r="1.5"></svg:circle><svg:path d="M12 3V.5m0 13V6"></svg:path><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M7 .5v5m0 3v5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSliderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
