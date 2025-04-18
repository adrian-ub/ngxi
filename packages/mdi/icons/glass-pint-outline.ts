import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlassPintOutlineIcon],svg[mdi-glass-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l2 20h11l2-20zm2.2 2h10.6l-1.6 16H7.8z"></svg:path>`,
})
export class MdiGlassPintOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
