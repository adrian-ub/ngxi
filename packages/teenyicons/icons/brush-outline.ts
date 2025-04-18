import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBrushOutlineIcon],svg[teenyicons-brush-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 7.5v-5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v5m12 0h-12m12 0v2a2 2 0 0 1-2 2h-3v2a1 1 0 1 1-2 0v-2h-3a2 2 0 0 1-2-2v-2m4-7V5m2-4.5V3"></svg:path>`,
})
export class TeenyiconsBrushOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
