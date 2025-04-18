import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNoteFillIcon],svg[ph-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h108.69a15.92 15.92 0 0 0 11.31-4.69L219.31 168a15.92 15.92 0 0 0 4.69-11.31V48a16 16 0 0 0-16-16M96 88h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16m32 80H96a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m-32-32a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm64 68.69V160h44.7Z"></svg:path>`,
})
export class PhNoteFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
