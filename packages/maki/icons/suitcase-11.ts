import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSuitcase11Icon],svg[maki-suitcase-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 3V1.578L7.36 1H3.64L3 1.748V3H1.5l-.5.5v6l.5.5h8l.5-.5v-6L9.5 3H8zM4 2h3v1H4V2z" fill="currentColor"></svg:path>`,
})
export class MakiSuitcase11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
