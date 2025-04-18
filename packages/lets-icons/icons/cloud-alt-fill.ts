import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltFillIcon],svg[lets-icons-cloud-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.29 10A7 7 0 1 1 15 19H6.5a4.5 4.5 0 1 1 0-9z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCloudAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
