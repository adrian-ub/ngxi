import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFigmaIcon],svg[grommet-icons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(4)"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8m0-8h4V8H4a4 4 0 1 0 0 8m0-8h4V0H4a4 4 0 1 0 0 8m8 0H8V0h4a4 4 0 1 1 0 8"></svg:path></svg:g>`,
})
export class GrommetIconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
