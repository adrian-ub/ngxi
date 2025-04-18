import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCafe11Icon],svg[maki-cafe-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 9.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5zM8 3H7V2H2v4a2.5 2.5 0 0 0 4.79 1H8a2 2 0 1 0 0-4zm0 3H7V4h1a1 1 0 1 1 0 2z" fill="currentColor"></svg:path>`,
})
export class MakiCafe11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
