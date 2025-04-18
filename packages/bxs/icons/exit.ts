import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsExitIcon],svg[bxs-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.002 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-14c-1.103 0-2 .897-2 2v6.001H10V7l6 5l-6 5v-3.999H3.002V19c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxsExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
