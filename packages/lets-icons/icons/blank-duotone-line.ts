import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankDuotoneLineIcon],svg[lets-icons-blank-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M14 16.333V21h1l6-6v-1h-4.667c-1.1 0-1.65 0-1.991.342c-.342.341-.342.891-.342 1.991"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14.172 21H7c-1.886 0-2.828 0-3.414-.586S3 18.886 3 17V7c0-1.886 0-2.828.586-3.414S5.114 3 7 3h10c1.886 0 2.828 0 3.414.586S21 5.114 21 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M14 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H21"></svg:path></svg:g>`,
})
export class LetsIconsBlankDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
