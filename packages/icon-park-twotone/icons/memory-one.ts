import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMemoryOneIcon],svg[icon-park-twotone-memory-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMemoryOne0"><svg:g fill="none"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 28h38v14H5zM5 6h38v14H5z"></svg:path><svg:rect width="4" height="4" x="11" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="11" y="33" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="33" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 13h4m-4 22h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMemoryOne0)"></svg:path>`,
})
export class IconParkTwotoneMemoryOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
