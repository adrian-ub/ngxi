import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmiVenIcon],svg[arcticons-ami-ven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.713 29.925a7.5 7.5 0 0 1 0-10.607h0a7.5 7.5 0 0 1 10.607 0h0a7.5 7.5 0 0 1 0 10.607h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 12.291c-32.84 0-39 3.016-39 10.817c0 9.073 7.791 12.601 14.058 12.601c11.585 0 24.942-3.39 24.942-23.418"></svg:path>`,
})
export class ArcticonsAmiVenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
