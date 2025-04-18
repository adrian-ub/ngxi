import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPlaceOfWorship11Icon],svg[maki-place-of-worship-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.52 0L4 2v1h3V2L5.52 0zM4 4L2 5v5h7V5L7 4H4zm7 1.5V10h-1V5.5a.5.5 0 0 1 1 0zm-10 0V10H0V5.5a.5.5 0 0 1 1 0z" fill="currentColor"></svg:path>`,
})
export class MakiPlaceOfWorship11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
