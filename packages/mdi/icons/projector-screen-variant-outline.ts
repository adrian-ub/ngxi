import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiProjectorScreenVariantOutlineIcon],svg[mdi-projector-screen-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v9h14V9h1c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1m-3 10H7V9h10z"></svg:path>`,
})
export class MdiProjectorScreenVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
