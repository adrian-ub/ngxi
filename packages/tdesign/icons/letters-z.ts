import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersZIcon],svg[tdesign-letters-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.571 5.1a1.1 1.1 0 0 0-1.1-1.1H7v2h7.571v1.135l-7.571 9V18.9A1.1 1.1 0 0 0 8.1 20H17v-2H9v-1.135l7.571-9z"></svg:path>`,
})
export class TdesignLettersZIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
