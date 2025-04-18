import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStopDuotoneIcon],svg[lets-icons-stop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"><svg:rect width="4" height="14" x="6" y="5" rx="1"></svg:rect><svg:rect width="4" height="14" x="14" y="5" rx="1"></svg:rect></svg:g>`,
})
export class LetsIconsStopDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
