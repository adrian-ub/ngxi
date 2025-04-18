import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAdobeLightroomIcon],svg[icon-park-outline-adobe-lightroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 15v18h8m6 0V21m0 5c2.25-4 4.629-4 6-4"></svg:path></svg:g>`,
})
export class IconParkOutlineAdobeLightroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
