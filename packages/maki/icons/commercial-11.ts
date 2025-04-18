import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCommercial11Icon],svg[maki-commercial-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 5a4.71 4.71 0 0 1 1-3h9a4.71 4.71 0 0 1 1 3H0zm2 1v5h4V7h2v4h1V6H2zm3 3H3V7h2v2z" fill="currentColor"></svg:path>`,
})
export class MakiCommercial11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
