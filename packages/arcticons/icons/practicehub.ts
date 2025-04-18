import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPracticehubIcon],svg[arcticons-practicehub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.64 4.5a4.3 4.3 0 0 1 2.36.72c5.3 3.67 10.6 7.31 12.06 11.58s-.23 9.15-3.27 14c5.07-12.68-9.29-15.6-9.29-15.6v20.48c0 4.3-3.91 7.82-9 7.82S8.4 40 8.4 35.71s4.06-7.81 9.13-7.81a13 13 0 0 1 3.41.45V8.4a3.67 3.67 0 0 1 3.69-3.9Z"></svg:path>`,
})
export class ArcticonsPracticehubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
