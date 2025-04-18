import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersWIcon],svg[tdesign-letters-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v14h5V4h2v14h5V4h2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"></svg:path>`,
})
export class TdesignLettersWIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
