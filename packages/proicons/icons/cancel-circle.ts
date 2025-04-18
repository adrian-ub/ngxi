import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCancelCircleIcon],svg[proicons-cancel-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9.25"></svg:circle><svg:path stroke-linecap="round" d="m8.875 8.875l6.25 6.25m0-6.25l-6.25 6.25"></svg:path></svg:g>`,
})
export class ProiconsCancelCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
