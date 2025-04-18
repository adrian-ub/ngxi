import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMarker11Icon],svg[maki-marker-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5-.018c-1.787 0-3.871 1.092-3.871 3.872C1.629 5.739 4.607 9.908 5.5 11c.794-1.092 3.871-5.161 3.871-7.147c0-2.779-2.084-3.87-3.871-3.87z" fill="currentColor"></svg:path>`,
})
export class MakiMarker11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
