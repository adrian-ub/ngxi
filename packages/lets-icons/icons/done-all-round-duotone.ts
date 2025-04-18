import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneAllRoundDuotoneIcon],svg[lets-icons-done-all-round-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="m8 13l4.228 3.382a1 1 0 0 0 1.398-.148L22 6"></svg:path><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="m10.565 12.368l4.9-5.988a.6.6 0 0 0-.93-.76L9.644 11.6zm-2.533 3.096l-.922-.769l-.967 1.183a.4.4 0 0 1-.55.067L2.36 13.52a.6.6 0 0 0-.72.96l3.233 2.425a1.6 1.6 0 0 0 2.198-.267z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsDoneAllRoundDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
