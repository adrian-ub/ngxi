import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousChristianIcon],svg[maki-religious-christian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 .955V4H3v3h3v8h3V7h3V4H9V1c0-1-.978-1-.978-1H6.99S6 0 6 .955"></svg:path>`,
})
export class MakiReligiousChristianIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
