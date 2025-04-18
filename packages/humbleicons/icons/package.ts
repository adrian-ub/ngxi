import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsPackageIcon],svg[humbleicons-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 8l8 4M4 8v8l8 4M4 8l4-2m4 6l4-2m-4 2v8m8-12l-8-4l-4 2m12 2v8l-8 4m8-12l-4 2m0 0L8 6"></svg:path>`,
})
export class HumbleiconsPackageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
