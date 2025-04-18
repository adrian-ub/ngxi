import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldAltDuotoneIcon],svg[lets-icons-world-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M18.572 7.206c-.724.848-1.685 1.543-2.805 2.028a9.5 9.5 0 0 1-3.634.765a9.6 9.6 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.414c-.724-.848-1.685-1.543-2.805-2.028A9.5 9.5 0 0 0 12.133 14a9.6 9.6 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"></svg:path></svg:g>`,
})
export class LetsIconsWorldAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
