import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRadishIcon],svg[icon-park-twotone-radish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRadish0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M37 23.2C37 32 24 44 24 44S11 32 11 23.2C11 15.91 16.82 10 24 10s13 5.91 13 13.2"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M24 4v6m-6-5l4 5m8-5l-4 5M12 20h8m9 7h7m-20 7h6"></svg:path><svg:path stroke-linejoin="round" d="M13.812 15A13.27 13.27 0 0 0 11 23.2c0 5.555 5.18 12.384 9 16.666"></svg:path><svg:path d="M37 23.2c0 2.774-1.291 5.866-3.06 8.8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRadish0)"></svg:path>`,
})
export class IconParkTwotoneRadishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
