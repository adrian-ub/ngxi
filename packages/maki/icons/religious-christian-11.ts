import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousChristian11Icon],svg[maki-religious-christian-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.5 0v3H2v2h2.5v6h2V5H9V3H6.5V0h-2z" fill="currentColor"></svg:path>`,
})
export class MakiReligiousChristian11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
