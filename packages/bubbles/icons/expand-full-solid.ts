import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExpandFullSolidIcon],svg[bubbles-expand-full-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.833 1.633A1.474 1.474 0 0 0 14.366.167h-3.82a.833.833 0 0 0 0 1.666H14a.167.167 0 0 1 .166.167v2.18a.833.833 0 1 0 1.667 0zM.167 4.18a.833.833 0 1 0 1.666 0V2A.167.167 0 0 1 2 1.833h3.453a.833.833 0 1 0 0-1.666h-3.82A1.473 1.473 0 0 0 .167 1.633zm15.666 10.18v-2.54a.833.833 0 1 0-1.667 0V14a.167.167 0 0 1-.166.166h-3.454a.833.833 0 1 0 0 1.667h3.82a1.474 1.474 0 0 0 1.467-1.474M.167 14.36a1.473 1.473 0 0 0 1.466 1.473h3.82a.833.833 0 1 0 0-1.667H2A.167.167 0 0 1 1.833 14v-2.18a.833.833 0 1 0-1.666 0zM11.18 5.427H4.815a1.3 1.3 0 0 0-1.3 1.3v2.554a1.3 1.3 0 0 0 1.3 1.3h6.367a1.3 1.3 0 0 0 1.3-1.3V6.727a1.3 1.3 0 0 0-1.3-1.3"></svg:path>`,
})
export class BubblesExpandFullSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
