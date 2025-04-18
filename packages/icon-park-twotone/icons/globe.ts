import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGlobeIcon],svg[icon-park-twotone-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGlobe0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.826 4A19.63 19.63 0 0 1 44 18.316C44 29.187 35.187 38 24.316 38A19.63 19.63 0 0 1 10 31.826"></svg:path><svg:path fill="#555" fill-rule="evenodd" d="M24 32c7.732 0 14-6.268 14-14S31.732 4 24 4s-14 6.268-14 14s6.268 14 14 14" clip-rule="evenodd"></svg:path><svg:path d="M24 38v6m-6 0h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGlobe0)"></svg:path>`,
})
export class IconParkTwotoneGlobeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
