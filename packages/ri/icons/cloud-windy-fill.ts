import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCloudWindyFillIcon],svg[ri-cloud-windy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19v-3.993H2.074a8 8 0 1 1 14.383-6.908A5.5 5.5 0 1 1 17.5 19zm-8 2h10v2H6zm-4-4h10v2H2z"></svg:path>`,
})
export class RiCloudWindyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
