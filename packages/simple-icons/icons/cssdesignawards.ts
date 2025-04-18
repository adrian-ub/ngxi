import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCssdesignawardsIcon],svg[simple-icons-cssdesignawards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.46.93L0 8.31l3.73 3.73l3.74 3.65l3.73 3.65l3.74-3.65l-7.47-7.38l7.47-7.4zm5.33 3.73L9.12 8.31l7.39 7.38l-7.46 7.4h7.46l3.76-3.66L24 15.7l-3.73-3.65l-3.74-3.73z"></svg:path>`,
})
export class SimpleIconsCssdesignawardsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
