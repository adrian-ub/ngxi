import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShapePolygonPlusIcon],svg[mdi-shape-polygon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.7V13h2v4l-9 4l-7-7l4-9h4v2H8.3l-2.9 6.6l5 5zM22 5v2h-3v3h-2V7h-3V5h3V2h2v3z"></svg:path>`,
})
export class MdiShapePolygonPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
