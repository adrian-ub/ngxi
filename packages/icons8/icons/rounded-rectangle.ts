import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8RoundedRectangleIcon],svg[icons8-rounded-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6c-2.745 0-5 2.255-5 5v10c0 2.745 2.255 5 5 5h16c2.745 0 5-2.255 5-5V11c0-2.745-2.255-5-5-5zm0 2h16c1.655 0 3 1.345 3 3v10c0 1.655-1.345 3-3 3H8c-1.655 0-3-1.345-3-3V11c0-1.655 1.345-3 3-3"></svg:path>`,
})
export class Icons8RoundedRectangleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
