import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLoupeIcon],svg[gg-loupe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 11V8h2v3h3v2h-3v3h-2v-3H8v-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a9 9 0 0 0 9 9h6a3 3 0 0 0 3-3v-6a9 9 0 1 0-18 0m9-7a7 7 0 1 1 0 14a7 7 0 0 1 0-14" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgLoupeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
