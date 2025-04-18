import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAdobeIndesignIcon],svg[icon-park-outline-adobe-indesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 15v18m16-16v16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 33c-2.5 0-4-1.6-4-4s1.5-4 4-4h4v8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineAdobeIndesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
