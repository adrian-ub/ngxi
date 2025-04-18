import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggKeyIcon],svg[gg-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8a3 3 0 0 0-3 3v2a3 3 0 1 0 6 0h6v2h2v-2h1v2h2v-4H9a3 3 0 0 0-3-3m1 5v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GgKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
