import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCloudIcon],svg[icomoon-free-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10.274a2.726 2.726 0 0 0-2.078-2.648A3.72 3.72 0 0 0 10.205 4a3.71 3.71 0 0 0-2.92 1.418a2.09 2.09 0 0 0-3.719 1.573a3.028 3.028 0 0 0-3.567 2.98A3.03 3.03 0 0 0 3.026 13H13.28a2.725 2.725 0 0 0 2.719-2.726z"></svg:path>`,
})
export class IcomoonFreeCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
