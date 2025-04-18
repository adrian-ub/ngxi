import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSwissIcon],svg[gg-swiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3v18h18V3zm11 4h-4v3H7v4h3v3h4v-3h3v-4h-3z" clip-rule="evenodd"></svg:path>`,
})
export class GgSwissIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
