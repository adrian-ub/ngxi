import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidDisplayIcon],svg[icon-park-solid-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSDisplay0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="20" x="6" y="6" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 13h8m-8 6h20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m8 44l4.889-6h21.778L40 44M24 26v18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSDisplay0)"></svg:path>`,
})
export class IconParkSolidDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
