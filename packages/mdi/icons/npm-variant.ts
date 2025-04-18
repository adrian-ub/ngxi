import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNpmVariantIcon],svg[mdi-npm-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 4H4v16h8V8h4v12h4V4" fill="currentColor"></svg:path>`,
})
export class MdiNpmVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
