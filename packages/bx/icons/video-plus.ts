import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVideoPlusIcon],svg[bx-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 8H9v3H6v2h3v3h2v-3h3v-2h-3z"></svg:path><svg:path fill="currentColor" d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333zm-1.999 10H4V7h12v5z"></svg:path>`,
})
export class BxVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
