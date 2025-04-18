import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsXmarkIcon],svg[lineicons-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.22 7.28a.75.75 0 0 1 1.06-1.06L12 10.938l4.719-4.718a.75.75 0 1 1 1.06 1.06L13.06 12l4.718 4.719a.75.75 0 1 1-1.06 1.06l-4.719-4.718l-4.719 4.718a.75.75 0 1 1-1.06-1.06L10.938 12z"></svg:path>`,
})
export class LineiconsXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
