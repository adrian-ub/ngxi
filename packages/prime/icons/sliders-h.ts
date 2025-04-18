import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeSlidersHIcon],svg[prime-sliders-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.25h-7a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5m-9 0H5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M10 9.75A.76.76 0 0 1 9.25 9V6a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75m9 7.5h-7a.75.75 0 0 1 0-1.5h7a.75.75 0 0 1 0 1.5m-9 0H5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M10 18.75a.76.76 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75m9-6h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5m-5 0H5a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M14 14.25a.76.76 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeSlidersHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
