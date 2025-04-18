import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTargetTwoIcon],svg[icon-park-outline-target-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 41c9.39 0 17-7.61 17-17S33.39 7 24 7S7 14.61 7 24s7.61 17 17 17Z"></svg:path><svg:path d="M24 32c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8Z"></svg:path><svg:path stroke-linecap="round" d="M4 24h40M24 4v40"></svg:path></svg:g>`,
})
export class IconParkOutlineTargetTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
