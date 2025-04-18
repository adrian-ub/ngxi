import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLedStripIcon],svg[mdi-led-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.81 8.46L14.83 20.5l.71-.72l1.41 1.41l1.41-1.41l-1.41-1.42l1.41-1.41l1.42 1.41l1.41-1.41l-1.41-1.41l.72-.71L8.46 2.81zm2.83 0l2.82-2.82l9.2 9.19l-2.83 2.83zm1.41 0l1.41 1.42l1.42-1.42l-1.42-1.41zm2.12 2.13L10.59 12L12 10.59l-1.41-1.42zm2.12 2.12l1.42 1.41l1.41-1.41l-1.41-1.42zm2.12 2.12l1.42 1.41l1.41-1.41l-1.41-1.42z"></svg:path>`,
})
export class MdiLedStripIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
