import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggRatioIcon],svg[gg-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6v6h2V8h4V6zm16 12h-6v-2h4v-4h2z"></svg:path><svg:path fill-rule="evenodd" d="M4 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm16 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
