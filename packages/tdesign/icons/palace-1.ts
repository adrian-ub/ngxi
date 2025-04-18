import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPalace1Icon],svg[tdesign-palace-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.004 2.002l-.002 1.081A6 6 0 0 1 18 9h4v13H2V9h4a6 6 0 0 1 5.002-5.917l.002-1.085zM8 9h8a4 4 0 0 0-8 0m2.998-3.002h2.004v2.004h-2.004zM4 11v9h1v-3a3 3 0 1 1 6 0v3h2v-3a3 3 0 1 1 6 0v3h1v-9zm13 9v-3a1 1 0 1 0-2 0v3zm-8 0v-3a1 1 0 1 0-2 0v3z"></svg:path>`,
})
export class TdesignPalace1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
