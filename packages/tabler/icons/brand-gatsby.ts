import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGatsbyIcon],svg[tabler-brand-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.296 14.297l6.407 6.407a9.02 9.02 0 0 1-6.325-6.116zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9 9 0 0 1 19.046 6.4"></svg:path>`,
})
export class TablerBrandGatsbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
