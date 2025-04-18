import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDropdownMenuIcon],svg[radix-icons-dropdown-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 3.1a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm0 2a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4m.4 1.6a.4.4 0 1 0 0 .8h7a.4.4 0 0 0 0-.8zm-.4 2.4c0-.22.18-.4.4-.4h7a.4.4 0 0 1 0 .8h-7a.4.4 0 0 1-.4-.4M2.5 9.25L5 6H0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDropdownMenuIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
