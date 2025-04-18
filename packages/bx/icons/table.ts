import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTableIcon],svg[bx-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2m0-2v-5h4v5zM14 7v5h-4V7zM8 7v5H4V7zm2 12v-5h4v5zm6 0v-5h3.894v5zm3.893-7H16V7h3.893z"></svg:path>`,
})
export class BxTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
