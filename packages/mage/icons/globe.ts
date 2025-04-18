import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGlobeIcon],svg[mage-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 21.5c2.332 0 4.222-4.253 4.222-9.5S14.332 2.5 12 2.5S7.778 6.753 7.778 12s1.89 9.5 4.222 9.5M2.5 12h19"></svg:path></svg:g>`,
})
export class MageGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
