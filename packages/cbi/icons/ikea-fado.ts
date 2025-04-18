import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaFadoIcon],svg[cbi-ikea-fado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.1 19.65a11 11 0 1 1 15.8 0zm16.27.26H3.63l.93 1.63h14.88zM7.7 21.8H5.3l.6 1.2h1.2zm5.5 0h-2.4l.6 1.2h1.2zm5.5 0h-2.4l.6 1.2h1.2z"></svg:path>`,
})
export class CbiIkeaFadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
