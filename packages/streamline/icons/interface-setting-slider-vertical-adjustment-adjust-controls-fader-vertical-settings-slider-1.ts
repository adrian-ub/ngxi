import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSlider1Icon],svg[streamline-interface-setting-slider-vertical-adjustment-adjust-controls-fader-vertical-settings-slider-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="5.5" r="2"></svg:circle><svg:path d="M7 1.5v-1m0 9v4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingSliderVerticalAdjustmentAdjustControlsFaderVerticalSettingsSlider1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
