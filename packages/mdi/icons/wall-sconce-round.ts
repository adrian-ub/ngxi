import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWallSconceRoundIcon],svg[mdi-wall-sconce-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19v-3h-2v3zm6.09-2.5l1.41-1.41l-1.77-1.77l-1.41 1.41zm-14.18 0l1.77-1.77l-1.41-1.41l-1.77 1.77zM20 12c0-2.86-1.5-5.5-4-6.93s-5.5-1.43-8 0S4 9.14 4 12z"></svg:path>`,
})
export class MdiWallSconceRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
