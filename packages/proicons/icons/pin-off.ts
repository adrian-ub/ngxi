import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPinOffIcon],svg[proicons-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7.77 16.233l-4.02 4.02m11.123-5.38c-.32.41-.562.885-.704 1.4l-.689 2.5a1.5 1.5 0 0 1-2.507.663L4.568 13.03a1.5 1.5 0 0 1 .662-2.507l2.5-.688c.515-.142.99-.384 1.4-.705m1.62-2.63l.944-2.464a2 2 0 0 1 3.282-.7l5.69 5.691a2 2 0 0 1-.698 3.282l-2.603.996"></svg:path><svg:path d="M21.25 21.25L2.75 2.75"></svg:path></svg:g>`,
})
export class ProiconsPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
