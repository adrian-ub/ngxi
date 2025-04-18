import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCancelSquareIcon],svg[proicons-cancel-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8.25 3.75a4.5 4.5 0 0 0-4.5 4.5v7.5a4.5 4.5 0 0 0 4.5 4.5h7.5a4.5 4.5 0 0 0 4.5-4.5v-7.5a4.5 4.5 0 0 0-4.5-4.5z"></svg:path><svg:path stroke-linecap="round" d="m8.655 8.655l6.69 6.69m0-6.69l-6.69 6.69"></svg:path></svg:g>`,
})
export class ProiconsCancelSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
