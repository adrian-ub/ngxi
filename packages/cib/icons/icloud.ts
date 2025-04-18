import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibIcloudIcon],svg[cib-icloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.682 14.302l.005-.036a8.463 8.463 0 0 0-15.901-4.036c-2.927-1.531-6.464.469-6.651 3.771A6.29 6.29 0 0 0 0 19.907a6.293 6.293 0 0 0 6.292 6.292h19.745c7.51-.021 8.115-11.057.646-11.896z"></svg:path>`,
})
export class CibIcloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
