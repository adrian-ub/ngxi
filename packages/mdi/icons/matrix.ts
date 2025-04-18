import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMatrixIcon],svg[mdi-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v2H4v16h2v2H2zm18 2h-2V2h4v20h-4v-2h2zM9 5h1v5h1v1H8v-1h1V6l-1 .5v-1zm6 8h1v5h1v1h-3v-1h1v-4l-1 .5v-1zm-6 0c1.1 0 2 1.34 2 3s-.9 3-2 3s-2-1.34-2-3s.9-3 2-3m0 1c-.55 0-1 .9-1 2s.45 2 1 2s1-.9 1-2s-.45-2-1-2m6-9c1.1 0 2 1.34 2 3s-.9 3-2 3s-2-1.34-2-3s.9-3 2-3m0 1c-.55 0-1 .9-1 2s.45 2 1 2s1-.9 1-2s-.45-2-1-2"></svg:path>`,
})
export class MdiMatrixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
