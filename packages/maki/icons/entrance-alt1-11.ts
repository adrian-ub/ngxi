import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiEntranceAlt111Icon],svg[maki-entrance-alt1-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.793 7.263a.5.5 0 0 0 .707.707l2.243-2.293a.25.25 0 0 0 0-.354L5.489 3.042a.5.5 0 0 0-.707.707L6 5H1.5a.5.5 0 0 0 0 1H6zM9 1H4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-4a.5.5 0 0 0 0 1H9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" fill="currentColor"></svg:path>`,
})
export class MakiEntranceAlt111Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
