import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingSliderHorizontalAdjustmentAdjustControlsFaderHorizontalSettingsSliderIcon],svg[streamline-interface-setting-slider-horizontal-adjustment-adjust-controls-fader-horizontal-settings-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="2" cy="2" r="1.5"></svg:circle><svg:path d="M3.5 2h10"></svg:path><svg:circle cx="7" cy="7" r="1.5"></svg:circle><svg:path d="M.5 7h5m3 0h5"></svg:path><svg:circle cx="12" cy="12" r="1.5"></svg:circle><svg:path d="M10.5 12H.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingSliderHorizontalAdjustmentAdjustControlsFaderHorizontalSettingsSliderIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
