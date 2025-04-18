import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFluidNgIcon],svg[arcticons-fluid-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.162 26.96H17.108a8.27 8.27 0 0 0-8.27 8.27h0a8.27 8.27 0 0 0 8.27 8.27h22.054m-19.324-39h8.324a11 11 0 0 1 11 11v5.54h0H8.838h0V15.5a11 11 0 0 1 11-11"></svg:path>`,
})
export class ArcticonsFluidNgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
