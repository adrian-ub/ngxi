import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchiveStackLineIcon],svg[ri-archive-stack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16V3H4zm16 4H4V7h16zM3 11h7v2h4v-2h7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 2v2H8v-2H5v6h14v-6z"></svg:path>`,
})
export class RiArchiveStackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
