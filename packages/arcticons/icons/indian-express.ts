import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIndianExpressIcon],svg[arcticons-indian-express-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.565 7.97l14.402 13.224c.51 3.345-1.363 5.629-3.086 7.46q.444-2.45-.092-3.73L21.203 12.128q-1.68-3.43 3.362-7.628q-.418 1.865 0 3.47m-5.846 7.47L33.12 28.663c.51 3.345-1.363 5.629-3.086 7.452q.443-2.442-.092-3.722L15.357 19.596q-1.681-3.429 3.362-7.627q-.419 1.865 0 3.47m-5.997 7.378l14.402 13.23c.51 3.338-1.363 5.621-3.078 7.453q.444-2.45-.092-3.73L9.369 26.982q-1.68-3.438 3.354-7.636q-.41 1.865 0 3.47"></svg:path>`,
})
export class ArcticonsIndianExpressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
