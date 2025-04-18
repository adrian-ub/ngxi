import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSimCardIcon],svg[tdesign-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586 1H21v22H3V5.586zm.828 2L5 6.414V21h14V3zM8 8.998h2.004v2.004H8zm6 0h2.004v2.004H14zM13 9v5h-2V9zm-3 3v5H8v-5zm6 0v5h-2v-5zm-5.002 2.998h2.004v2.004h-2.004z"></svg:path>`,
})
export class TdesignSimCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
