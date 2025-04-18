import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCollectLaptopIcon],svg[icon-park-twotone-collect-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCollectLaptop0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M21 9H11a3 3 0 0 0-3 3v21h32V23"></svg:path><svg:path fill="#555" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M32.3 7C30.478 7 29 8.435 29 10.205c0 3.204 3.9 6.117 6 6.795c2.1-.678 6-3.59 6-6.795C41 8.435 39.523 7 37.7 7A3.33 3.33 0 0 0 35 8.362A3.33 3.33 0 0 0 32.3 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCollectLaptop0)"></svg:path>`,
})
export class IconParkTwotoneCollectLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
