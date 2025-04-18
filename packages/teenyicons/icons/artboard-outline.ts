import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArtboardOutlineIcon],svg[teenyicons-artboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4.5V4a.5.5 0 0 0-.5.5zm6 0h.5a.5.5 0 0 0-.5-.5zm0 6v.5a.5.5 0 0 0 .5-.5zm-6 0H4a.5.5 0 0 0 .5.5zM4 0v2h1V0zm6 0v2h1V0zM0 5h2V4H0zm0 6h2v-1H0zm13-6h2V4h-2zm0 6h2v-1h-2zm-9 2v2h1v-2zm6 0v2h1v-2zM4.5 5h6V4h-6zm5.5-.5v6h1v-6zm.5 5.5h-6v1h6zm-5.5.5v-6H4v6z"></svg:path>`,
})
export class TeenyiconsArtboardOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
