import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCircle11Icon],svg[maki-circle-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0z" fill="currentColor"></svg:path>`,
})
export class MakiCircle11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
