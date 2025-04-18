import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDatastoreIcon],svg[carbon-datastore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 22h12v2H8z"></svg:path><svg:circle cx="23" cy="9" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 8h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2v-4ZM6 6h20v6H6Zm20 20H6v-6h20Zm-4-8H10v-4h12Z"></svg:path>`,
})
export class CarbonDatastoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
