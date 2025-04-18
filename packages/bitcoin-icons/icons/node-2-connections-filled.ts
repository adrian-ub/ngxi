import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode2ConnectionsFilledIcon],svg[bitcoin-icons-node-2-connections-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 7.165c.5-.162.901-.543 1.091-1.03l4.233 4.234a1.76 1.76 0 0 0-1.03 1.092zm4.295 5.375l-4.296 4.295c.5.162.902.543 1.092 1.03l4.233-4.234a1.76 1.76 0 0 1-1.03-1.092m-5.374 4.296l-4.295-4.296c-.162.5-.542.902-1.03 1.092l4.234 4.233c.19-.487.591-.867 1.092-1.03m-.001-9.669l-4.295 4.296a1.76 1.76 0 0 0-1.03-1.092l4.234-4.233c.19.487.591.867 1.092 1.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path><svg:circle cx="12" cy="18.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="5.5" cy="12" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2M16 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNode2ConnectionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
