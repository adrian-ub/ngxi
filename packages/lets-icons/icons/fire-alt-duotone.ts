import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFireAltDuotoneIcon],svg[lets-icons-fire-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFireAltDuotone0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M9.5 10c0-.79-1.053-1-1.332-.26C7.492 11.53 7 13.134 7 14a5 5 0 0 0 10 0c0-.93-.568-2.711-1.322-4.663c-.975-2.528-1.463-3.792-2.066-3.86a1.03 1.03 0 0 0-.575.107C12.5 5.864 12.5 7.243 12.5 10a1.5 1.5 0 0 1-3 0Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M7 14a5 5 0 0 0 10 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFireAltDuotone0)"></svg:path>`,
})
export class LetsIconsFireAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
