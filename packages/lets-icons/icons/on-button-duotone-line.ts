import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsOnButtonDuotoneLineIcon],svg[lets-icons-on-button-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="15" r="5" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M6.343 6.343a8 8 0 1 0 11.314 0M12 8V4"></svg:path></svg:g>`,
})
export class LetsIconsOnButtonDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
