import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderLinksIcon],svg[hugeicons-folder-links-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 8.59 22 9.643 22 11.75v.75m-10-6l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535C4.822 20.394 6.944 20.493 11 20.5m6.706.441a1.946 1.946 0 0 0 2.729 0a1.89 1.89 0 0 0 0-2.697l-1.706-1.685a1.95 1.95 0 0 0-2.45-.23m.015-2.27a1.946 1.946 0 0 0-2.729 0a1.89 1.89 0 0 0 0 2.697l1.706 1.685c.678.67 1.736.738 2.49.201" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderLinksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
