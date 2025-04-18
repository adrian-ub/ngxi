import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVidioIcon],svg[arcticons-vidio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.581 32.259c2.907-1.324 8.181-9.236 9.635-16.772c-6.04-1.776-5.264-10.258.753-9.742c5.393.355 7.73 7.514 2.917 19.71c-7.352 15.082-24.263 26.084-20.916 5.587c3.854-17.33-.7-16.696-4.65-15.77c-3.617.883-2.885 6.308-1.27 6.965c5.716 3.53.775 10.98-5.878 2.82c-4.92-8.902 1.669-17.805 11.25-16.405c8.902 2.874 9.515 11.12 7.244 20.464q-1.077 4.036.915 3.143"></svg:path>`,
})
export class ArcticonsVidioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
