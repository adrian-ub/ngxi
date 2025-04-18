import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGistSecretIcon],svg[codicon-gist-secret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 14h4v.91l.09.09H2.5l-.5-.5v-13l.5-.5h7.72l.35.14l3.28 3.3l.15.36v2.54a3.1 3.1 0 0 0-1-.94V6H9.5L9 5.5V2H3zm10-9l-3-3v3zm.5 4v1h1l.5.5v4l-.5.5h-6l-.5-.5v-4l.5-.5h1V9a2 2 0 0 1 4 0m-2.707-.707A1 1 0 0 0 10.5 9v1h2V9a1 1 0 0 0-1.707-.707M9 11v3h5v-3z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconGistSecretIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
