import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPoliceJpIcon],svg[maki-police-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1A6.5 6.5 0 1 0 14 7.5A6.5 6.5 0 0 0 7.5 1m2.6 2.84l-2.6 2.6l-2.6-2.6a4.44 4.44 0 0 1 5.2 0M3.84 4.9l2.6 2.6l-2.6 2.6a4.44 4.44 0 0 1 0-5.2m1.06 6.26l2.6-2.6l2.6 2.6a4.44 4.44 0 0 1-5.2 0m6.26-1.06l-2.6-2.6l2.6-2.6a4.44 4.44 0 0 1 0 5.2"></svg:path>`,
})
export class MakiPoliceJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
