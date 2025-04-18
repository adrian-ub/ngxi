import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersIIcon],svg[tdesign-letters-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4h7v2H13v12h2.5v2h-7v-2H11V6H8.5z"></svg:path>`,
})
export class TdesignLettersIIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
