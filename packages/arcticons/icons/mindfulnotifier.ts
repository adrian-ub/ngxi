import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindfulnotifierIcon],svg[arcticons-mindfulnotifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20.721" cy="17.963" r="7.611" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.721 29.76c8.467 0 15.221 2.367 15.221 5.19v7.264H5.5V34.95c0-2.823 6.753-5.19 15.221-5.19M32.974 9.702a14.79 14.79 0 0 1 0 16.523M38.78 5.786a21.8 21.8 0 0 1 0 24.355"></svg:path>`,
})
export class ArcticonsMindfulnotifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
