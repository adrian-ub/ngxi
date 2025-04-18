import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBoundarySignalsIcon],svg[ix-boundary-signals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 42.667l168 96l-168 96zm213.333 0l168 96l-168 96zm42.667 73.515v44.949l39.339-22.464zm-42.667 161.152l168 96l-168 96zm42.667 73.514v44.95l39.339-22.464zm-256-73.514l168 96l-168 96z"></svg:path>`,
})
export class IxBoundarySignalsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
