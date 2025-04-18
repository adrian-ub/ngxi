import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCloudIcon],svg[feather-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10"></svg:path>`,
})
export class FeatherCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
