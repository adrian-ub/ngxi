import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneHelmetOneIcon],svg[icon-park-twotone-helmet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTHelmetOne0"><svg:g fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11c-9.389 0-17 7.815-17 17.455V35h34v-6.546C41 18.815 33.389 11 24 11M4 35h40v6H4z"></svg:path><svg:path d="M21 6h6v18h-6z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTHelmetOne0)"></svg:path>`,
})
export class IconParkTwotoneHelmetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
