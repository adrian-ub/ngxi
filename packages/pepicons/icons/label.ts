import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsLabelIcon],svg[pepicons-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2.979 2.636v-.003h.003a36.006 36.006 0 0 1 1.815-.115c1.46-.058 3.193-.05 4.48.142a.386.386 0 0 1 .21.117l7.754 7.753a.5.5 0 0 1 0 .708l-5.657 5.656a.5.5 0 0 1-.707 0L3.123 9.141a.386.386 0 0 1-.117-.21c-.192-1.287-.2-3.02-.142-4.48c.028-.722.073-1.359.115-1.815Z"></svg:path><svg:circle cx="7.435" cy="7.173" r="1" fill="currentColor" transform="rotate(-45 7.435 7.173)"></svg:circle></svg:g>`,
})
export class PepiconsLabelIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
