import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSkipForwardBoldIcon],svg[ph-skip-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 28a12 12 0 0 0-12 12v62L74.55 31A20 20 0 0 0 44 47.88v160.24A20 20 0 0 0 74.55 225L188 154v62a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12M68 200.73V55.27L184.3 128Z"></svg:path>`,
})
export class PhSkipForwardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
