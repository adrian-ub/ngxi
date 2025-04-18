import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetProperOfDuotoneIcon],svg[ph-superset-proper-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 128a80 80 0 0 1-80 80H64V48h72a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M224 128a88.1 88.1 0 0 1-88 88H64a8 8 0 0 1 0-16h72a72 72 0 0 0 0-144H64a8 8 0 0 1 0-16h72a88.1 88.1 0 0 1 88 88"></svg:path></svg:g>`,
})
export class PhSupersetProperOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
