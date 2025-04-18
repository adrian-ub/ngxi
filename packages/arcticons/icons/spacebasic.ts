import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpacebasicIcon],svg[arcticons-spacebasic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.667 5.5A6.167 6.167 0 0 0 5.5 11.666h0a6.167 6.167 0 0 0 6.167 6.167h24.667a6.167 6.167 0 1 0 0-12.333z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.026 7.306l24.667 24.667a6.167 6.167 0 0 1-8.72 8.72L7.305 16.028a6.167 6.167 0 0 1 8.72-8.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.667 30.167a6.167 6.167 0 1 0 0 12.333h24.667a6.167 6.167 0 1 0 0-12.333z"></svg:path>`,
})
export class ArcticonsSpacebasicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
