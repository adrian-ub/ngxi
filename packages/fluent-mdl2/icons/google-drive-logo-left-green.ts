import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GoogleDriveLogoLeftGreenIcon],svg[fluent-mdl2-google-drive-logo-left-green-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M942 836L323 1920L0 1354L619 270z"></svg:path>`,
})
export class FluentMdl2GoogleDriveLogoLeftGreenIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
