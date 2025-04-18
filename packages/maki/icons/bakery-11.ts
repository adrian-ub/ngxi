import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBakery11Icon],svg[maki-bakery-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.5 2c-1 0-1 1-1 1L5 7.5s0 .5.5.5s.5-.5.5-.5L7.5 3s0-1-1-1h-2zM9 3.5l-2 4h1.5l1 1h.5c1 0 1-.9 1-.9V6.3L9 3.5zM0 6.3v1.2s.03 1.01 1 1c.97-.01.5 0 .5 0l1-1H4l-2-4l-2 2.8z" fill="currentColor"></svg:path>`,
})
export class MakiBakery11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
