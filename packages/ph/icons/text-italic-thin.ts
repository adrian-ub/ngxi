import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextItalicThinIcon],svg[ph-text-italic-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 56a4 4 0 0 1-4 4h-37.12l-45.33 136H144a4 4 0 0 1 0 8H64a4 4 0 0 1 0-8h37.12l45.33-136H112a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTextItalicThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
