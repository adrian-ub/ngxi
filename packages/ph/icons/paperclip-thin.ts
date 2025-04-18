import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPaperclipThinIcon],svg[ph-paperclip-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206.83 125.17a4 4 0 0 1 0 5.66l-82.06 82a52 52 0 0 1-73.54-73.55l99.29-100.73a36 36 0 1 1 50.94 50.9l-99.3 100.69a20 20 0 1 1-28.3-28.27l83.29-84.68a4 4 0 1 1 5.7 5.61l-83.31 84.7a12 12 0 1 0 16.95 17l99.29-100.69a28 28 0 1 0-39.58-39.63L56.91 144.87a44 44 0 1 0 62.21 62.26l82-82a4 4 0 0 1 5.71.04"></svg:path>`,
})
export class PhPaperclipThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
