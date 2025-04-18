import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSparkling2FillIcon],svg[ri-sparkling-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 1.208l1.32 2.473L20.792 5L18.32 6.319L17 8.792l-1.318-2.473l-2.473-1.32l2.473-1.318zM8 4.333l2.667 5l5 2.667l-5 2.667l-2.666 5l-2.667-5l-5-2.667l5-2.667zm11.667 12l-1.666-3.125l-1.667 3.125L13.209 18l3.125 1.667l1.667 3.125l1.666-3.125L22.792 18z"></svg:path>`,
})
export class RiSparkling2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
