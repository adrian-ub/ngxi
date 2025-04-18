import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSunlightDuotoneIcon],svg[lets-icons-sunlight-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="4" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path d="M12 8V4m0 16v-4M9.172 9.172L6.343 6.343m11.314 11.314l-2.829-2.829M16 12h4M4 12h4m6.828-2.828l2.829-2.829M6.343 17.657l2.829-2.829"></svg:path></svg:g>`,
})
export class LetsIconsSunlightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
