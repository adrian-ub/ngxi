import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchiveStackFillIcon],svg[ri-archive-stack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z"></svg:path>`,
})
export class RiArchiveStackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
