import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasHashIcon],svg[pajamas-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.995 1.84a.75.75 0 0 0-1.49-.18L5.105 5H1.75a.75.75 0 0 0 0 1.5h3.175l-.36 3H1.75a.75.75 0 0 0 0 1.5h2.635l-.38 3.16a.75.75 0 0 0 1.49.18l.4-3.34h3.49l-.38 3.16a.75.75 0 0 0 1.49.18l.4-3.34h3.355a.75.75 0 0 0 0-1.5h-3.175l.36-3h2.815a.75.75 0 0 0 0-1.5h-2.635l.38-3.16a.75.75 0 0 0-1.49-.18l-.4 3.34h-3.49zm2.57 7.66l.36-3h-3.49l-.36 3z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasHashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
