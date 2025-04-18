import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodeThinIcon],svg[ph-code-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.56 91.07L22.25 128l44.31 36.93A4 4 0 0 1 64 172a3.94 3.94 0 0 1-2.56-.93l-48-40a4 4 0 0 1 0-6.14l48-40a4 4 0 0 1 5.12 6.14m176 33.86l-48-40a4 4 0 1 0-5.12 6.14L233.75 128l-44.31 36.93a4 4 0 1 0 5.12 6.14l48-40a4 4 0 0 0 0-6.14m-81.19-88.69a4 4 0 0 0-5.13 2.39l-64 176a4 4 0 0 0 2.39 5.13A4.1 4.1 0 0 0 96 220a4 4 0 0 0 3.76-2.63l64-176a4 4 0 0 0-2.39-5.13"></svg:path>`,
})
export class PhCodeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
