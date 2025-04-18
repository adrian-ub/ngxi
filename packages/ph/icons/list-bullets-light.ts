import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListBulletsLightIcon],svg[ph-list-bullets-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M82 64a6 6 0 0 1 6-6h128a6 6 0 0 1 0 12H88a6 6 0 0 1-6-6m134 58H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12m0 64H88a6 6 0 0 0 0 12h128a6 6 0 0 0 0-12M44 54a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 128a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0-64a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhListBulletsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
