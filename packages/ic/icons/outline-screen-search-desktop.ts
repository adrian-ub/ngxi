import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineScreenSearchDesktopIcon],svg[ic-outline-screen-search-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h16c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2M4 5h16v11H4zM1 19h22v2H1z"></svg:path><svg:path fill="currentColor" d="M13.97 7.53c-1.37-1.37-3.58-1.37-4.95 0s-1.37 3.58 0 4.95c1.18 1.18 3 1.34 4.36.47l2.09 2.09l1.06-1.06l-2.09-2.09c.87-1.36.72-3.18-.47-4.36m-1.06 3.88c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83s2.05-.78 2.83 0c.78.79.78 2.05 0 2.83"></svg:path>`,
})
export class IcOutlineScreenSearchDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
