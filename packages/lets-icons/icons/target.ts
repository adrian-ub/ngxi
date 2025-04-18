import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTargetIcon],svg[lets-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="7"></svg:circle><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M7.05 7.05L4 4m12.95 3.05L20 4m0 16l-3.05-3.05M4 20l3.05-3.05"></svg:path></svg:g>`,
})
export class LetsIconsTargetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
