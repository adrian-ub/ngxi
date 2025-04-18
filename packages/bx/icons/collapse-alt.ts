import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCollapseAltIcon],svg[bx-collapse-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15h7v7h2v-9H2zM15 2h-2v9h9V9h-7z"></svg:path>`,
})
export class BxCollapseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
