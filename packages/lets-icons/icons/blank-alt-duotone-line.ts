import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBlankAltDuotoneLineIcon],svg[lets-icons-blank-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 16.333V21h1l6-6v-1h-4.667c-1.1 0-1.65 0-1.991.342c-.342.341-.342.891-.342 1.991"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M12.172 21H9c-1.886 0-2.828 0-3.414-.586S5 18.886 5 17V7c0-1.886 0-2.828.586-3.414S7.114 3 9 3h6c1.886 0 2.828 0 3.414.586S19 5.114 19 7v7.172c0 .408 0 .613-.076.797c-.076.183-.22.328-.51.617l-4.828 4.828c-.29.29-.434.434-.617.51c-.184.076-.389.076-.797.076Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M12 21v-4.667c0-1.1 0-1.65.342-1.991c.341-.342.891-.342 1.991-.342H19"></svg:path></svg:g>`,
})
export class LetsIconsBlankAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
