import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsGraphIcon],svg[proicons-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 4v13.5a3 3 0 0 0 3 3H20"></svg:path><svg:path d="m6.5 15l4.5-4.5l3.5 3.5L20 8.5"></svg:path></svg:g>`,
})
export class ProiconsGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
