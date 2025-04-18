import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersGIcon],svg[tdesign-letters-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8.5A1.5 1.5 0 0 0 7 5.5v13A1.5 1.5 0 0 0 8.5 20H17v-9h-5.2v2H15v5H9V6h7z"></svg:path>`,
})
export class TdesignLettersGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
