import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsBoxIcon],svg[bxs-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3h20v4H2zm17 5H3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8zm-3 6H8v-2h8z"></svg:path>`,
})
export class BxsBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
