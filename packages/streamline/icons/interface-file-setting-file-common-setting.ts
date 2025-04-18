import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceFileSettingFileCommonSettingIcon],svg[streamline-interface-file-setting-file-common-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.39 4V1.5a1 1 0 0 1 1-1h5l5 5v7a1 1 0 0 1-1 1h-3.5"></svg:path><svg:path d="M8.39.5v5h5m-9.75 1V8m-3.03.25l1.3.75m-1.3 2.75l1.3-.75m1.73 2.5V12m3.03-.25L5.37 11m1.3-2.75L5.37 9"></svg:path><svg:circle cx="3.64" cy="10" r="2"></svg:circle></svg:g>`,
})
export class StreamlineInterfaceFileSettingFileCommonSettingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
