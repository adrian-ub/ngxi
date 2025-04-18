import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiResidentialCommunity11Icon],svg[maki-residential-community-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8.8 8c.7-.1 1.2-.8 1.2-1.5C10 5.7 9.3 5 8.5 5S7 5.7 7 6.5c0 .7.5 1.4 1.2 1.5v1.5H6V1H2v8.5H1v.5h9v-.5H8.8V8zM3 2h2v1H3V2zm0 2h2v1H3V4zm0 2h2v1H3V6z" fill="currentColor"></svg:path>`,
})
export class MakiResidentialCommunity11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
