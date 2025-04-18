import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMacFinderIcon],svg[icon-park-solid-mac-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMacFinder0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 38V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2"></svg:path><svg:path stroke="#000" d="M25 8s-5 10-4 17h6l1 15"></svg:path><svg:path stroke="#fff" d="M34 40H22m8-32H18"></svg:path><svg:path stroke="#000" d="M34 16v2m-20-2v2m-1 11s4.19 3 11 3s11-3 11-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMacFinder0)"></svg:path>`,
})
export class IconParkSolidMacFinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
