import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclepencilIcon],svg[whh-circlepencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 760L556 356L356 556l404 404q-116 64-248 64q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257q0 133-64 248M256 256l34 112q57-21 78-78zm153 47q-12 38-40 66t-66 40l33 107l180-180z"></svg:path>`,
})
export class WhhCirclepencilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
