import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudIcon],svg[tdesign-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5a5 5 0 0 0-4.916 5.919l.175.942l-.934.215A3.001 3.001 0 0 0 6 18h11a4 4 0 1 0-.067-8l-.86.014l-.142-.848A5 5 0 0 0 11 5m-7 5a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7 7 0 0 1 4 10"></svg:path>`,
})
export class TdesignCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
