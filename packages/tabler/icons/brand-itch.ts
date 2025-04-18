import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandItchIcon],svg[tabler-brand-itch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 7v1c0 1.087 1.078 2 2 2c1.107 0 2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2s2-.91 2-2c0 1.09.893 2 2 2c.922 0 2-.913 2-2V7q-.013-.412-1.588-2.068A3 3 0 0 0 18.238 4H5.762a3 3 0 0 0-2.174.932Q2.012 6.588 2 7m2 3q-.176 9.42.814 10.456c1.534.367 4.355.535 7.186.536c2.83-.001 5.652-.169 7.186-.536c.99-1.037.898-9.559.814-10.456"></svg:path><svg:path d="m10 16l2-2l2 2m-2-2v4"></svg:path></svg:g>`,
})
export class TablerBrandItchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
