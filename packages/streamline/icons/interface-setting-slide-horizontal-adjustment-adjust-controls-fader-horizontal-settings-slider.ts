import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSlideHorizontalAdjustmentAdjustControlsFaderHorizontalSettingsSliderIcon],svg[streamline-interface-setting-slide-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="5.5" cy="7" r="2"></svg:circle><svg:path d="M1.5 7h-1m9 0h4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingSlideHorizontalAdjustmentAdjustControlsFaderHorizontalSettingsSliderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
