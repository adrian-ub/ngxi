import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPolice11Icon],svg[maki-police-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.5.5l.5 1h3l.5-1h-4zM5 2v1a1.5 1.5 0 0 0 3 0V2H5zM1.75 3C1 3 1 3.75 1 3.75v3a.75.75 0 0 0 .975.715L4 6.826V10l4-5H5s-.195 0-.424.072L2.5 5.727V3.75S2.5 3 1.75 3zm7.021 2.389L5 10h4V6a.98.98 0 0 0-.229-.611z" fill="currentColor"></svg:path>`,
})
export class MakiPolice11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
