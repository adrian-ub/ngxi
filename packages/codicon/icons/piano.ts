import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconPianoIcon],svg[codicon-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2L0 3v6h1V3h2v5.5l.5.5h1l.5-.5V3h2v5.5l.5.5h1l.5-.5V3h2v5.5l.5.5h1l.5-.5V3h2v10h-3v-3h-1v3H8.5v-3h-1v3H5v-3H4v3H1V9H0v4l1 1h14l1-1V3l-1-1z"></svg:path>`,
})
export class CodiconPianoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
