import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsminIcon],svg[arcticons-osmin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.71 7.93a7.28 7.28 0 0 0-7.28 7.29c0 5.69 5.58 12.56 7 14.24a.43.43 0 0 0 .67 0c1.44-1.69 6.9-8.55 6.9-14.24a7.28 7.28 0 0 0-7.29-7.29m0 10a2.73 2.73 0 1 1 2.72-2.72a2.72 2.72 0 0 1-2.72 2.73Zm6.82-5.28l3.41-1.89M3.77 31.28l20.66-11.4m-4.33 2.39l12.71 21.35"></svg:path>`,
})
export class ArcticonsOsminIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
