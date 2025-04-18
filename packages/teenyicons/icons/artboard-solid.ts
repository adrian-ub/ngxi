import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsArtboardSolidIcon],svg[teenyicons-artboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0v2h1V0zm6 0v2h1V0zM2 5H0V4h2zm-2 6h2v-1H0zm15-6h-2V4h2zm-2 6h2v-1h-2zm-9 4v-2h1v2zm6-2v2h1v-2zM4.5 4a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class TeenyiconsArtboardSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
