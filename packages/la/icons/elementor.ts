import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laElementorIcon],svg[la-elementor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 4v10h2V11zm4 0v2h6v-2zm0 4v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class LaElementorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
