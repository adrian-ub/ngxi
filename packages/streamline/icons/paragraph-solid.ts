import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParagraphSolidIcon],svg[streamline-paragraph-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.786 0a4.786 4.786 0 1 0 0 9.573h.943v3.677a.75.75 0 0 0 1.5 0V1.5h2.146v11.75a.75.75 0 0 0 1.5 0V1.5h2.375a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParagraphSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
