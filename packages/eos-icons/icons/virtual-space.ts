import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsVirtualSpaceIcon],svg[eos-icons-virtual-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:circle cx="11.999" cy="7.493" r="1.493" fill="currentColor"></svg:circle><svg:circle cx="11.999" cy="16.493" r="1.493" fill="currentColor"></svg:circle><svg:circle cx="16.496" cy="12" r="1.493" fill="currentColor"></svg:circle><svg:circle cx="7.496" cy="12" r="1.493" fill="currentColor"></svg:circle><svg:circle cx="11.999" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class EosIconsVirtualSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
