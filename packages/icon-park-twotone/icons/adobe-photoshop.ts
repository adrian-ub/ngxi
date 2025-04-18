import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneAdobePhotoshopIcon],svg[icon-park-twotone-adobe-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTAdobePhotoshop0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 15v18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 25c3 0 7-.8 7-5s-4-5-7-5h-2v10z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 21.025c-1 0-6-.498-6 2.987s6 2.49 6 5.976s-6 2.987-6 2.987"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAdobePhotoshop0)"></svg:path>`,
})
export class IconParkTwotoneAdobePhotoshopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
