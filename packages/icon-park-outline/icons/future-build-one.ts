import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFutureBuildOneIcon],svg[icon-park-outline-future-build-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M14 24c1.217-8.296 10-19 10-19s8.782 10.704 10 19c1.09 7.432-3 20-3 20H17s-4.091-12.568-3-20"></svg:path><svg:path d="M18 14h12m-15 6h18m-19 6h20m-19 6h18m-17 6h16"></svg:path><svg:path stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path d="M24 4v2"></svg:path></svg:g>`,
})
export class IconParkOutlineFutureBuildOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
