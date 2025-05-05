import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBrushIcon],svg[picon-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4v4h1V7l2 1h1V5l1 3h1V4M0 3V2h3V0h2v2h3v1"></svg:path>`,
})
export class PiconBrushIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
