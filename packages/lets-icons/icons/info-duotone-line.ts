import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsInfoDuotoneLineIcon],svg[lets-icons-info-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.2"><svg:circle cx="10" cy="10" r="10" fill="currentColor" fill-opacity=".25" transform="matrix(-1 0 0 1 22 2)"></svg:circle><svg:path stroke-linecap="square" d="M12 12v6m0-11V6"></svg:path></svg:g>`,
})
export class LetsIconsInfoDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
