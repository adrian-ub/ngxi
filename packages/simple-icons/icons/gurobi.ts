import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGurobiIcon],svg[simple-icons-gurobi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.036 0l7.032 1.359L24 18.37L18.37 24L0 17.635L1.805 5.952zm12.389 18.239L17.887 2.36l-3.557 7.83l3.88 13.264l5.215-5.214Zm-5.822-16.46L11.138.528l-8.71 5.617l11.554 3.6l3.62-7.968Z"></svg:path>`,
})
export class SimpleIconsGurobiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
