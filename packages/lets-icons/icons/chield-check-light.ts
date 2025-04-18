import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldCheckLightIcon],svg[lets-icons-chield-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="m12.773 3.706l5.985 1.596a1 1 0 0 1 .742.966v6.02a6 6 0 0 1-2.672 4.993l-4.273 2.85a1 1 0 0 1-1.11 0l-4.273-2.85A6 6 0 0 1 4.5 12.29V6.27a1 1 0 0 1 .742-.967l5.985-1.596a3 3 0 0 1 1.546 0Z"></svg:path><svg:path d="m9.5 11.5l1.823 1.823a.25.25 0 0 0 .354 0L15 10"></svg:path></svg:g>`,
})
export class LetsIconsChieldCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
