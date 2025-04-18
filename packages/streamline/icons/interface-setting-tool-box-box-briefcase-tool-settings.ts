import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingToolBoxBoxBriefcaseToolSettingsIcon],svg[streamline-interface-setting-tool-box-box-briefcase-tool-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="9" x=".5" y="4.5" rx="1"></svg:rect><svg:path d="M.5 8.5h13M7 7.5v2m3-5a3 3 0 0 0-3-3h0a3 3 0 0 0-3 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingToolBoxBoxBriefcaseToolSettingsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
