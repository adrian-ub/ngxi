import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggToolboxIcon],svg[gg-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 5.5h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1m6 3H4v2h16zm-16 12v-8h3v2h4v-2h2v2h4v-2h3v8z" clip-rule="evenodd"></svg:path>`,
})
export class GgToolboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
