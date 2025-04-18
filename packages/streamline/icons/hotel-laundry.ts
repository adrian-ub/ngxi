import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHotelLaundryIcon],svg[streamline-hotel-laundry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M9.959 9h-.841C8.383 9 7.658 8.829 7 8.5v0A4.7 4.7 0 0 0 4.882 8h-.84M10 8.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-8.5-5h11"></svg:path></svg:g>`,
})
export class StreamlineHotelLaundryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
