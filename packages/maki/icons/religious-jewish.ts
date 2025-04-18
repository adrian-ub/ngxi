import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousJewishIcon],svg[maki-religious-jewish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5.5L5.5 4H1l2.5 3.5L1 11h4.5l2 3.5l2-3.5H14l-2.5-3.5L14 4H9.5z"></svg:path>`,
})
export class MakiReligiousJewishIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
