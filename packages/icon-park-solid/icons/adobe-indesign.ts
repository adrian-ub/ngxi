import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAdobeIndesignIcon],svg[icon-park-solid-adobe-indesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAdobeIndesign0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 15v18m16-16v16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 33c-2.5 0-4-1.6-4-4s1.5-4 4-4h4v8z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAdobeIndesign0)"></svg:path>`,
})
export class IconParkSolidAdobeIndesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
