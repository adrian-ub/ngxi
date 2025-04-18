import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeAddressBookIcon],svg[icomoon-free-address-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0v16h12V0zm6 4.005a1.995 1.995 0 1 1 0 3.99a1.995 1.995 0 0 1 0-3.99M12 12H6v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM1 1h1.5v3H1zm0 4h1.5v3H1zm0 4h1.5v3H1zm0 4h1.5v3H1z"></svg:path>`,
})
export class IcomoonFreeAddressBookIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
