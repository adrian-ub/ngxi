import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungContactsIcon],svg[arcticons-samsung-contacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c6.08 0 11.512-2.764 15.115-7.102c-1.338-7.136-7.59-12.54-15.115-12.54s-13.777 5.404-15.115 12.54C12.488 39.736 17.92 42.5 24 42.5"></svg:path><svg:circle cx="24" cy="12.702" r="7.202" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSamsungContactsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
