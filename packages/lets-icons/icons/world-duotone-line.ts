import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldDuotoneLineIcon],svg[lets-icons-world-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 6.421c-.724.782-1.685 1.424-2.805 1.872A10.2 10.2 0 0 1 12.133 9a10.3 10.3 0 0 1-3.664-.615C7.33 7.964 6.34 7.346 5.583 6.583m12.989 10.996c-.724-.782-1.685-1.424-2.805-1.872A10.2 10.2 0 0 0 12.133 15a10.3 10.3 0 0 0-3.664.615c-1.139.42-2.128 1.038-2.886 1.801M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
