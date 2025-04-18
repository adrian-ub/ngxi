import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfIcon],svg[ph-superset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 200a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h152a8 8 0 0 1 8 8m-64-48H56a8 8 0 0 0 0 16h96a64 64 0 0 0 0-128H56a8 8 0 0 0 0 16h96a48 48 0 0 1 0 96"></svg:path>`,
})
export class PhSupersetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
