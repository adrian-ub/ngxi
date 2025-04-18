import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSkipBackwardOutlineIcon],svg[mdi-skip-backward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14.17L15.83 12L18 9.83zM20 19V5l-7 7m-9 7h2V5H4m7 9.17L8.83 12L11 9.83zM13 19V5l-7 7"></svg:path>`,
})
export class MdiSkipBackwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
