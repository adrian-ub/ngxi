import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggViewGridIcon],svg[gg-view-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm3 2H5a1 1 0 0 0-1 1v1h4zm2 0v2h4V7zm6 0v2h4V8a1 1 0 0 0-1-1zm-2 4h-4v2h4zm2 2v-2h4v2zm-2 2h-4v2h4zm2 2v-2h4v1a1 1 0 0 1-1 1zm-8 0v-2H4v1a1 1 0 0 0 1 1zm0-4v-2H4v2z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
