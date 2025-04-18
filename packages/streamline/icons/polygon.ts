import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePolygonIcon],svg[streamline-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.793 13.207a1 1 0 0 1-.707.293H4.914a1 1 0 0 1-.707-.293L.793 9.793A1 1 0 0 1 .5 9.086V4.914a1 1 0 0 1 .293-.707L4.207.793A1 1 0 0 1 4.914.5h4.172a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707v4.172a1 1 0 0 1-.293.707z"></svg:path>`,
})
export class StreamlinePolygonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
