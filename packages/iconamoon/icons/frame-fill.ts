import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonFrameFillIcon],svg[iconamoon-frame-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 7v10H7V7zM5 7v10H3a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h10v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7h2a1 1 0 1 0 0-2h-2V3a1 1 0 1 0-2 0v2H7V3a1 1 0 0 0-2 0v2H3a1 1 0 0 0 0 2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonFrameFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
