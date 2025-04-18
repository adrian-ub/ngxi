import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProGuitarTunerIcon],svg[arcticons-pro-guitar-tuner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 25h13v-1a5.5 5.5 0 1 1 11 0v1h13"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M27.5 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.461 19.725L32.5 13.5"></svg:path><svg:circle cx="24" cy="10" r=".75" fill="currentColor"></svg:circle><svg:circle cx="27" cy="10.323" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.742" cy="11.121" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.548" cy="15.871" r=".75" fill="currentColor"></svg:circle><svg:circle cx="38.194" cy="21.452" r=".75" fill="currentColor"></svg:circle><svg:circle cx="21" cy="10.323" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.258" cy="11.121" r=".75" fill="currentColor"></svg:circle><svg:circle cx="12.452" cy="15.871" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.806" cy="21.452" r=".75" fill="currentColor"></svg:circle><svg:circle cx="15.145" cy="12.992" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M19.5 29.5h9v10h-3L24 38l-1.5 1.5h-3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M28.5 31.5h11v6h-31v-6z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 37.5v-2m3 2v-2m3 2v-2m15 2v-2m3 2v-2m3 2v-2m-15 0v2m3 0v-2"></svg:path>`,
})
export class ArcticonsProGuitarTunerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
