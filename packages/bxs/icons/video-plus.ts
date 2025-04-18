import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsVideoPlusIcon],svg[bxs-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.333L22 17V7l-4 3.333zm-4 6h-3v3H9v-3H6v-2h3V8h2v3h3z"></svg:path>`,
})
export class BxsVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
