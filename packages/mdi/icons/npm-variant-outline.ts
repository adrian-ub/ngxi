import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNpmVariantOutlineIcon],svg[mdi-npm-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 3v18h18V3H3m3 3h12v12h-3V9h-3v9H6V6z" fill="currentColor"></svg:path>`,
})
export class MdiNpmVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
