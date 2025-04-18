import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNoteSolidIcon],svg[teenyicons-note-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5A1.5 1.5 0 0 1 1.5 0h12A1.5 1.5 0 0 1 15 1.5V9H9.5a.5.5 0 0 0-.5.5V15H1.5A1.5 1.5 0 0 1 0 13.5zM12 4H3V3h9z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 15h.086a1.5 1.5 0 0 0 1.06-.44l3.415-3.414a1.5 1.5 0 0 0 .439-1.06V10h-5z"></svg:path>`,
})
export class TeenyiconsNoteSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
