import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsGuitarAmpIcon],svg[bx-bxs-guitar-amp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 6h-2V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM8 4h8v2H8V4zM6 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm3 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm2-4H4V8h16v4z" fill="currentColor"></svg:path><svg:path d="M14 9h2v2h-2zm3 0h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class BxBxsGuitarAmpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
