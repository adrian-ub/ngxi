import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGhostIcon],svg[picon-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v1h1V2M3 2H2v1h1m5 5L6 7L4 8L2 7L0 8C-1-3 9-3 8 8"></svg:path>`,
})
export class PiconGhostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
