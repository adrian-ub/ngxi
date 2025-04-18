import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDepartmentStoreIcon],svg[openmoji-department-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#D0CFCE" d="M16 12h40v48H16z"></svg:path><svg:path fill="#92D3F5" d="M20 50h8v10h-8zm24 0h8v10h-8zm-12 0h8v10h-8zM16 36h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46zM16 26h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46zM16 16h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46z"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M16 12h40v48H16z"></svg:path><svg:path d="M20 50h8v10h-8zm24 0h8v10h-8zm-12 0h8v10h-8zM16 36h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46zM16 26h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46zM16 16h10v10H16zm10 0h10v10H26zm10 0h10v10H36zm10 0h10v10H46z"></svg:path></svg:g>`,
})
export class OpenmojiDepartmentStoreIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
