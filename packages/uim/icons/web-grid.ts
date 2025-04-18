import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWebGridIcon],svg[uim-web-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h12v9h2V2h-2v9H2z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M21 22h-5V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M14 22H3a1 1 0 0 1-1-1v-8h12zm0-11H2V3a1 1 0 0 1 1-1h11z" opacity=".5"></svg:path>`,
})
export class UimWebGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
