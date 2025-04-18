import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxExitIcon],svg[bx-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2"></svg:path><svg:path fill="currentColor" d="m11 16l5-4l-5-4v3.001H3v2h8z"></svg:path>`,
})
export class BxExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
