import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMacFinderIcon],svg[icon-park-outline-mac-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 38V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2"></svg:path><svg:path d="M25 8s-5 10-4 17h6l1 15m6 0H22m8-32H18m16 8v2m-20-2v2"></svg:path><svg:path d="M13 29s4.19 3 11 3s11-3 11-3"></svg:path></svg:g>`,
})
export class IconParkOutlineMacFinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
