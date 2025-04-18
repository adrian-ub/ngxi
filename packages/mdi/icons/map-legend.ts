import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMapLegendIcon],svg[mdi-map-legend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3L3.36 4.9c-.21.07-.36.25-.36.48V20.5a.5.5 0 0 0 .5.5l.16-.03L9 18.9l6 2.1l5.64-1.9c.21-.07.36-.25.36-.48V3.5a.5.5 0 0 0-.5-.5l-.16.03L15 5.1zM8 5.45v11.7l-3 1.16V6.46zm2 .02l4 1.4v11.66l-4-1.4zm9 .23v11.84l-3 1.01V6.86zm-11.54.6l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67zm0 2.75l-1.89.67v2.15l1.89-.67z"></svg:path>`,
})
export class MdiMapLegendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
