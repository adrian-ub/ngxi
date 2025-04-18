import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFileSubmoduleIcon],svg[codicon-file-submodule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11h1V6.99H2zm1-5.01V5.5l.5-.5h4.43l.43.25l.43.75h5.71l.5.5v8l-.5.5h-11l-.5-.5V12H1.5l-.5-.5v-9l.5-.5h4.42l.44.25l.43.75h5.71l.5.5V6l-1-.03V4H6.5l-.43-.25L5.64 3H2v2.99zm5.07.76L7.64 6H4v3h3.15l.41-.74L8 8h6V7H8.5zM7.45 10H4v4h10V9H8.3l-.41.74z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFileSubmoduleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
