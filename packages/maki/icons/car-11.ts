import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCar11Icon],svg[maki-car-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 4l-.89-2.66A.5.5 0 0 0 7.64 1H3.36a.5.5 0 0 0-.47.34L2 4a1 1 0 0 0-1 1v3h1v1a1 1 0 1 0 2 0V8h3v1a1 1 0 1 0 2 0V8h1V5a1 1 0 0 0-1-1zM3 7a1 1 0 1 1 0-2a1 1 0 0 1 0 2zm0-3l.62-2h3.76L8 4H3zm5 3a1 1 0 1 1 0-2a1 1 0 0 1 0 2z" fill="currentColor"></svg:path>`,
})
export class MakiCar11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
