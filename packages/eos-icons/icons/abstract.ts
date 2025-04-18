import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsAbstractIcon],svg[eos-icons-abstract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8a2 2 0 0 0-1.71 1l-4 7a2 2 0 0 0 0 2l4 7A2 2 0 0 0 8 21h8a2 2 0 0 0 1.74-1l4-7a2 2 0 0 0 0-2l-4-7A2 2 0 0 0 16 3"></svg:path>`,
})
export class EosIconsAbstractIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
