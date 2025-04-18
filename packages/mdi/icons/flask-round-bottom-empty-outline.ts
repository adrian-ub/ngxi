import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlaskRoundBottomEmptyOutlineIcon],svg[mdi-flask-round-bottom-empty-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.79 1.64-5.2 4-6.33V5c0-.55.45-1 1-1h.5l-1-2h5l-1 2h.5c.55 0 1 .45 1 1v3.67c2.36 1.13 4 3.54 4 6.33m-8-9v4.1a5 5 0 1 0 2 0V6z"></svg:path>`,
})
export class MdiFlaskRoundBottomEmptyOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
