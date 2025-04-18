import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSquareStroked11Icon],svg[maki-square-stroked-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.19 1H1.81a.81.81 0 0 0-.81.81v7.38c0 .447.363.81.81.81h7.38a.81.81 0 0 0 .81-.81V1.81A.81.81 0 0 0 9.19 1zM2 2h7v7H2V2z" fill="currentColor"></svg:path>`,
})
export class MakiSquareStroked11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
