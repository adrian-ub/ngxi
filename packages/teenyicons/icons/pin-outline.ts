import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPinOutlineIcon],svg[teenyicons-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="square" clip-rule="evenodd"><svg:path d="M7.5 8.495a2 2 0 0 0 2-1.999a2 2 0 0 0-4 0a2 2 0 0 0 2 1.999Z"></svg:path><svg:path d="M13.5 6.496c0 4.997-5 7.995-6 7.995s-6-2.998-6-7.995A6 6 0 0 1 7.5.5c3.313 0 6 2.685 6 5.996Z"></svg:path></svg:g>`,
})
export class TeenyiconsPinOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
