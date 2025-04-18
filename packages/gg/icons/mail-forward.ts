import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMailForwardIcon],svg[gg-mail-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.638 15.529l1.414 1.414l4.95-4.95l-4.95-4.95l-1.414 1.415l2.498 2.498H7.998a4 4 0 0 0-4 4v2h2v-2a2 2 0 0 1 2-2h8.212z"></svg:path>`,
})
export class GgMailForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
