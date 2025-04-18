import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCheckDisabledOutlineIcon],svg[lsicon-check-disabled-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4 8h8M2.5 2.5h11v11h-11z"></svg:path>`,
})
export class LsiconCheckDisabledOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
