import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoStepForwardIcon],svg[fontisto-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 22.835V1.146A1.14 1.14 0 0 1 1.696.149L1.69.146L20.4 10.639V.601a.6.6 0 0 1 .599-.6h1.2a.6.6 0 0 1 .6.6v22.8A.6.6 0 0 1 22.2 24h-1.201a.6.6 0 0 1-.599-.599V13.362L1.69 23.856a1.1 1.1 0 0 1-.548.145A1.155 1.155 0 0 1 0 22.846zv.001z"></svg:path>`,
})
export class FontistoStepForwardIcon {
  readonly viewBox = input("0 0 23 24")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
