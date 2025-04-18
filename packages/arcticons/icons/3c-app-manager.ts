import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3cAppManagerIcon],svg[arcticons-3c-app-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 28.826v.12c0 5.361-4.346 9.707-9.708 9.707h0c-5.361 0-9.708-4.346-9.708-9.707v-9.892c0-5.361 4.347-9.707 9.708-9.707h0c5.362 0 9.708 4.346 9.708 9.707v.12M5.503 36.181c2.023 1.696 4.208 2.472 9.113 2.472h1.143a7.325 7.325 0 0 0 7.325-7.325h0a7.325 7.325 0 0 0-7.325-7.325"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.794c2.028-1.69 4.214-2.46 9.12-2.447l1.14.006a7.325 7.325 0 0 1 7.324 7.325h0a7.325 7.325 0 0 1-7.325 7.325m-5.63 0h5.63"></svg:path><svg:circle cx="32.792" cy="24" r="7.325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32.792" cy="25.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.792" cy="25.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.792" cy="25.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="32.792" cy="22.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.792" cy="22.5" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.792" cy="22.5" r=".75" fill="currentColor"></svg:circle>`,
})
export class Arcticons3cAppManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
