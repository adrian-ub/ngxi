import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersSIcon],svg[tdesign-letters-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6a2 2 0 0 1 2-2H16v2H9.5v5h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8v-2h6.5v-5h-5a2 2 0 0 1-2-2z"></svg:path>`,
})
export class TdesignLettersSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
