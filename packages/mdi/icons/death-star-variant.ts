import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDeathStarVariantIcon],svg[mdi-death-star-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h19.89c-.06.69-.2 1.36-.4 2H14v2h3v2h-2v2h-2.5v1H12c-5.18 0-9.45-3.95-9.95-9m19.89-2H2.05c.5-5.05 4.77-9 9.95-9c1.62 0 3.15.39 4.5 1.08V5h2v2H20v2h1.54c.2.64.34 1.31.4 2M12 6.75a2.5 2.5 0 0 0-2.5-2.5A2.5 2.5 0 0 0 7 6.75a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5"></svg:path>`,
})
export class MdiDeathStarVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
