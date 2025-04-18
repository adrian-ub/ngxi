import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacSagittariusIcon],svg[mdi-zodiac-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v10h-2V5.41L10.41 15l2.3 2.29l-1.42 1.42L9 16.41l-5.29 5.3l-1.42-1.42L7.59 15l-2.3-2.29l1.42-1.42L9 13.59L18.59 4H12V2z"></svg:path>`,
})
export class MdiZodiacSagittariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
