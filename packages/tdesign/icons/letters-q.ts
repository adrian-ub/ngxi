import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersQIcon],svg[tdesign-letters-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v12h6V6zm8 12h1.5v2h-10A1.5 1.5 0 0 1 7 18.5v-13A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5z"></svg:path>`,
})
export class TdesignLettersQIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
