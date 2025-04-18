import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMemoryCardIcon],svg[mage-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.85 12h-5.7a1.9 1.9 0 0 0-1.9 1.9v2.85c0 1.05.85 1.9 1.9 1.9h5.7a1.9 1.9 0 0 0 1.9-1.9V13.9a1.9 1.9 0 0 0-1.9-1.9M7.668 4.999v1.89m2.85-1.89v1.89m2.85-1.89v1.89"></svg:path><svg:path d="M18.222 6.633v3.135h1.615V17.7a3.866 3.866 0 0 1-3.923 3.8H8.086a3.866 3.866 0 0 1-3.923-3.8V6.3a3.866 3.866 0 0 1 3.923-3.8h7.828a3.866 3.866 0 0 1 3.923 3.8v.333z"></svg:path></svg:g>`,
})
export class MageMemoryCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
