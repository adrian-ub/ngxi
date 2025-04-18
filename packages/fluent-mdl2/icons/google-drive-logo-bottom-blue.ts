import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GoogleDriveLogoBottomBlueIcon],svg[fluent-mdl2-google-drive-logo-bottom-blue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 1354l-323 566H487l322-566z"></svg:path>`,
})
export class FluentMdl2GoogleDriveLogoBottomBlueIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
