import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClipboardPlusSolidIcon],svg[teenyicons-clipboard-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 0h7v1h3v12.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5V1h3zm1 1h5v1.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 10V9H5V8h2V6h1v2h2v1H8v2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsClipboardPlusSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
