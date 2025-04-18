import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSortRemoveIcon],svg[carbon-sort-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19.415L28.586 18L25 21.587L21.414 18L20 19.415L23.586 23L20 26.586L21.414 28L25 24.414L28.586 28L30 26.586L26.414 23zM10 18h6v2h-6zM2 6h14v2H2zm4 6h10v2H6z"></svg:path>`,
})
export class CarbonSortRemoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
