import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiIceCream11Icon],svg[maki-ice-cream-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4 6a2.49 2.49 0 0 0 1.5-.5c.432.325.959.5 1.5.5l-1 4.69a.5.5 0 0 1-.92 0L4 6zm3-4h-.09a1.5 1.5 0 1 0-2.82 0H4a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 1 0 7 2z" fill="currentColor"></svg:path>`,
})
export class MakiIceCream11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
