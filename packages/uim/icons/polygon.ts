import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimPolygonIcon],svg[uim-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 20.794h-9a1 1 0 0 1-.866-.5l-4.5-7.794a1 1 0 0 1 0-1l4.5-7.794a1 1 0 0 1 .866-.5h9a1 1 0 0 1 .866.5l4.5 7.794a1 1 0 0 1 0 1l-4.5 7.794a1 1 0 0 1-.866.5"></svg:path>`,
})
export class UimPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
