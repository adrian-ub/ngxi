import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudFilledIcon],svg[tdesign-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a7 7 0 0 1 13.723-1.957A6.001 6.001 0 0 1 17 20H6a5 5 0 0 1-1.988-9.589A7 7 0 0 1 4 10"></svg:path>`,
})
export class TdesignCloudFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
