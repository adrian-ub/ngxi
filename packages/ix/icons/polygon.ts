import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPolygonIcon],svg[ix-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65l143.085 143.102L456.837 448H64V247.163L240.915 70.248zm-42.666 103.002l-128 128v140.501h247.146L240.915 292.418l-6.248-6.248z"></svg:path>`,
})
export class IxPolygonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
