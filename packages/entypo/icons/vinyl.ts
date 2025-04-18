import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoVinylIcon],svg[entypo-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.999.8A9.2 9.2 0 0 0 .8 10.001a9.2 9.2 0 0 0 18.399 0A9.2 9.2 0 0 0 9.999.8M10 13.001a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class EntypoVinylIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
