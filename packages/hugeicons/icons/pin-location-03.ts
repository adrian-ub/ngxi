import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPinLocation03Icon],svg[hugeicons-pin-location-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M5 16c-1.25.633-2 1.439-2 2.316C3 20.35 7.03 22 12 22s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316m-7-6v8"></svg:path></svg:g>`,
})
export class HugeiconsPinLocation03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
