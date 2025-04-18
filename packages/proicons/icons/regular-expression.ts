import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRegularExpressionIcon],svg[proicons-regular-expression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="6.75" cy="17.25" r="3"></svg:circle><svg:path d="m16 3.75l.003 4.996L20.25 6.25l-4.245 2.5l4.245 2.5l-4.247-2.496L16 13.75l-.002-4.996l-4.248 2.496l4.245-2.5l-4.245-2.5l4.248 2.496z"></svg:path></svg:g>`,
})
export class ProiconsRegularExpressionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
