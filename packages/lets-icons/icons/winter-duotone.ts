import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWinterDuotoneIcon],svg[lets-icons-winter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="12" cy="12" r="2.4" fill="currentColor" fill-opacity=".25"></svg:circle><svg:path stroke-linecap="round" d="M12 9V7m0-3v3m0 0L9 5m3 2l3-2m0 7h2m3 0h-3m0 0l2-3m-2 3l2 3m-7 0v2m0 3v-3m0 0l-3 2m3-2l3 2m-6-7H7m-3 0h3m0 0L5 9m2 3l-2 3"></svg:path></svg:g>`,
})
export class LetsIconsWinterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
