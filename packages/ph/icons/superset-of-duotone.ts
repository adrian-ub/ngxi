import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfDuotoneIcon],svg[ph-superset-of-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a56 56 0 0 1-56 56H56V48h96a56 56 0 0 1 56 56" opacity=".2"></svg:path><svg:path d="M216 200a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-64-48H56a8 8 0 0 0 0 16h96a64 64 0 0 0 0-128H56a8 8 0 0 0 0 16h96a48 48 0 0 1 0 96"></svg:path></svg:g>`,
})
export class PhSupersetOfDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
