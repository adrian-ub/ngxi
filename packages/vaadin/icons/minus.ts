import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinMinusIcon],svg[vaadin-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h12v2H2z"></svg:path>`,
})
export class VaadinMinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
