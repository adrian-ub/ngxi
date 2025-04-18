import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsAbstractInstanceOutlinedIcon],svg[eos-icons-abstract-instance-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.732 11l-4-7a2 2 0 0 0-1.74-1h-8a2 2 0 0 0-1.71 1l-4 7a2 2 0 0 0 0 2l4 7a2 2 0 0 0 1.71 1h8a2 2 0 0 0 1.74-1l4-7a2 2 0 0 0 0-2M16 19H8l-4-7l4-7h8l4 7Z"></svg:path><svg:circle cx="12" cy="12" r="2" fill="currentColor"></svg:circle>`,
})
export class EosIconsAbstractInstanceOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
