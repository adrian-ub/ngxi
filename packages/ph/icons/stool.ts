import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStoolIcon],svg[ph-stool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h6.64L56.1 222.75a8 8 0 0 0 6.65 9.15a8 8 0 0 0 1.25.1a8 8 0 0 0 7.89-6.75L79.68 176h96.64l7.78 49.25A8 8 0 0 0 192 232a8 8 0 0 0 1.26-.1a8 8 0 0 0 6.65-9.15L177.36 80H184a16 16 0 0 0 16-16M72 40h112v24H72Zm101.79 120H82.21l12.63-80h66.32Z"></svg:path>`,
})
export class PhStoolIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
