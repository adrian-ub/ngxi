import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOkayIcon],svg[arcticons-okay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:circle cx="20.669" cy="14.135" r="3.336" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="16.175" cy="18.993" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.016" cy="21.152" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.857" cy="23.311" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.699" cy="25.47" r=".75" fill="currentColor"></svg:circle><svg:circle cx="7.54" cy="27.628" r=".75" fill="currentColor"></svg:circle><svg:circle cx="16.175" cy="36.264" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.404" cy="38.493" r=".75" fill="currentColor"></svg:circle><svg:circle cx="20.633" cy="40.722" r=".75" fill="currentColor"></svg:circle><svg:circle cx="14.016" cy="34.105" r=".75" fill="currentColor"></svg:circle><svg:circle cx="11.857" cy="31.946" r=".75" fill="currentColor"></svg:circle><svg:circle cx="9.699" cy="29.787" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsOkayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
