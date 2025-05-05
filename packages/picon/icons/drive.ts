import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDriveIcon],svg[picon-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 3l2-3h4l2 3v5H0m1-5h6L6 1H2M1 7h6V4H1m1 1h1v1H2"></svg:path>`,
})
export class PiconDriveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
