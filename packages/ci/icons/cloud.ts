import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCloudIcon],svg[ci-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a4 4 0 0 1 0 8H6a5 5 0 0 1-.331-9.99A7.002 7.002 0 0 1 18.929 11z"></svg:path>`,
})
export class CiCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
