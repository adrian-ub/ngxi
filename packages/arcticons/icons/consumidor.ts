import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConsumidorIcon],svg[arcticons-consumidor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.074 29.311V17.69h3.78a3.922 3.922 0 0 1 0 7.845h-3.78M9.645 28.003c.7.882 1.784 1.37 2.908 1.307h1.745a2.905 2.905 0 0 0 0-5.81h-1.89a2.906 2.906 0 0 1-.034-5.812h1.779a3.12 3.12 0 0 1 2.908 1.308M38.5 25.461a3.926 3.926 0 0 1-7.851 0V21.54a3.91 3.91 0 0 1 3.892-3.922h.033a3.787 3.787 0 0 1 3.78 3.922"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsConsumidorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
