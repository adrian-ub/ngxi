import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTajMahalIcon],svg[hugeicons-taj-mahal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 22V11m-8 0v11m.281-11C4.425 7 10.347 5 12 3c1.653 2 7.575 4 3.719 8z"></svg:path><svg:path d="M20.495 12c2.62-2.727-.607-3.967-1.509-5C18.604 7.438 17 8 17 8.5M19 7V6m-7-3V2M3.506 12c-2.621-2.727.606-3.967 1.508-5C5.396 7.438 7 8 7 8.5M5 7V6m3 5l-3.674 1.347a4.9 4.9 0 0 1-1.706.303c-.385 0-.62.208-.62.62V22h20v-8.73c0-.412-.235-.62-.62-.62a4.9 4.9 0 0 1-1.706-.303L16 11m3 7v-1m-7 5v-3m-7-1v-1m7-1v-1"></svg:path></svg:g>`,
})
export class HugeiconsTajMahalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
