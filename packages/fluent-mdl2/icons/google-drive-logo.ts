import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GoogleDriveLogoIcon],svg[fluent-mdl2-google-drive-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1995 1261h-646L699 128h646zm-1186 93h1239l-323 566H487zM619 270l323 566l-619 1084L0 1354z"></svg:path>`,
})
export class FluentMdl2GoogleDriveLogoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
