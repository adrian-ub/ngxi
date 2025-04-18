import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAddAltLightIcon],svg[lets-icons-user-add-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:circle cx="10" cy="8" r="4"></svg:circle><svg:path d="M15.796 20.447a6 6 0 0 0-11.592 0M19 10v6m3-3h-6"></svg:path></svg:g>`,
})
export class LetsIconsUserAddAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
