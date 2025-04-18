import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggViewComfortableIcon],svg[gg-view-comfortable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v3H4V8a1 1 0 0 1 1-1m-1 6v3a1 1 0 0 0 1 1h3v-4zm6 4h9a1 1 0 0 0 1-1v-3H10z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewComfortableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
