import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GoogleDriveLogoRightYellowIcon],svg[fluent-mdl2-google-drive-logo-right-yellow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1995 1261h-646L699 128h646z"></svg:path>`,
})
export class FluentMdl2GoogleDriveLogoRightYellowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
