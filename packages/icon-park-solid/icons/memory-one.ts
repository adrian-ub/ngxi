import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMemoryOneIcon],svg[icon-park-solid-memory-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSMemoryOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 28h38v14H5zM5 6h38v14H5z"></svg:path><svg:rect width="4" height="4" x="11" y="11" fill="#000" rx="2"></svg:rect><svg:rect width="4" height="4" x="11" y="33" fill="#000" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="11" fill="#000" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="33" fill="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 13h4m-4 22h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSMemoryOne0)"></svg:path>`,
})
export class IconParkSolidMemoryOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
