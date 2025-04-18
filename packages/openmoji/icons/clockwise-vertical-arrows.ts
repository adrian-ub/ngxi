import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClockwiseVerticalArrowsIcon],svg[openmoji-clockwise-vertical-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiClockwiseVerticalArrows0" d="m26.675 17l8.215 9.452h-6.024l.237 25.086s-.747 6.721 7.467 2.24l1.494 2.987c-13.442 7.468-13.442-5.974-13.442-5.974l-.137-24.34H18.46z"></svg:path><svg:path id="openmojiClockwiseVerticalArrows1" d="m44.785 59.025l-8.214-9.452h6.024l-.237-25.087s.747-6.72-7.468-2.24l-1.493-2.987c13.442-7.468 13.442 5.974 13.442 5.974l.137 24.34H53z"></svg:path></svg:defs><svg:g fill="#92d3f5"><svg:use href="#openmojiClockwiseVerticalArrows0"></svg:use><svg:use href="#openmojiClockwiseVerticalArrows1"></svg:use></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:use href="#openmojiClockwiseVerticalArrows0"></svg:use><svg:use href="#openmojiClockwiseVerticalArrows1"></svg:use></svg:g>`,
})
export class OpenmojiClockwiseVerticalArrowsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
