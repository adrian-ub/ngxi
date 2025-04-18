import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMorsetrainerIcon],svg[arcticons-morsetrainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M40.16 6.58c4.1 8.3 4 30.9-1.8 35c-4.2 2.9-25.1-1.6-29.8-6.5c-3.5-3.7-4-10-3.3-13.6c1-5.6 32.5-20 34.9-14.9Z"></svg:path><svg:path fill="none" stroke="currentColor" d="M19.16 14.88v11.3H23V30h4v8.6h6.5v-15h-3.8V15h-2.5v8.6H22V15Z"></svg:path>`,
})
export class ArcticonsMorsetrainerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
