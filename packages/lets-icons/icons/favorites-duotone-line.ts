import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFavoritesDuotoneLineIcon],svg[lets-icons-favorites-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsFavoritesDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M19.5 11c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 19.403 4.5 16.018 4.5 11c0-4.5 3.634-7.5 7.5-7.5c4 0 7.5 3 7.5 7.5Z"></svg:path><svg:path stroke="#fff" d="m8.286 11.786l3.457 3.457c.121.121.182.182.257.182s.136-.06.257-.182l3.457-3.457c.748-.748.864-1.92.277-2.8c-.915-1.371-2.954-1.301-3.772.13l-.141.248a.09.09 0 0 1-.156 0l-.141-.247c-.818-1.432-2.857-1.502-3.772-.13c-.587.88-.47 2.051.277 2.799Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsFavoritesDuotoneLine0)"></svg:path>`,
})
export class LetsIconsFavoritesDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
