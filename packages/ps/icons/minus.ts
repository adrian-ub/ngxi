import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMinusIcon],svg[ps-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 213q21 0 21-21t-21-21H21q-21 0-21 21t21 21z"></svg:path>`,
})
export class PsMinusIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
