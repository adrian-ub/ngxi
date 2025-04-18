import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhButtonxIcon],svg[whh-buttonx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m247-746q14-20 7-43t-30-35t-48.5-6t-38.5 27L512 408L375 221q-13-21-38.5-27t-48.5 6t-30 35t7 43l171 234l-171 234q-14 20-7 43t30 35t48.5 6t38.5-27l137-187l137 187q13 21 38.5 27t48.5-6t30-35t-7-43L588 512z"></svg:path>`,
})
export class WhhButtonxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
