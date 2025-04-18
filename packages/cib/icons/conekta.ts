import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibConektaIcon],svg[cib-conekta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 26.005L3.599 16L11 6l4.599 6.198L12.594 16l3 4l-4.599 6.005zM16.599 32l11.802-16L16.599 0H7.401l12 16l-12 16z"></svg:path>`,
})
export class CibConektaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
