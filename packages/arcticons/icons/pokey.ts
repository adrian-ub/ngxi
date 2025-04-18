import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPokeyIcon],svg[arcticons-pokey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.332 8.355l-11.86 10.262l7.486 9.883L3.776 38.972m18.883-3.07l7.121-16.949L40 30.897l4.486-20.145"></svg:path>`,
})
export class ArcticonsPokeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
