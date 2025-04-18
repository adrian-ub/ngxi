import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsJsIcon],svg[grommet-icons-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path fill="currentColor" d="M0 0h24v24H0z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M12 11v8c0 .876-.523 2-2 2c-2.385 0-2.5-2-2.5-2m13.29-5.484q-.9-1.515-2.386-1.516C16.856 12 16 13 16 14s.5 2 2.508 2.5c1.278.318 2.492 1 2.492 2.5s-1.315 2-2.5 2q-2.271 0-3-2"></svg:path></svg:g>`,
})
export class GrommetIconsJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
