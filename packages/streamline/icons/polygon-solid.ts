import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePolygonSolidIcon],svg[streamline-polygon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.914 0a1.5 1.5 0 0 0-1.06.44L.439 3.853A1.5 1.5 0 0 0 0 4.914v4.172c0 .398.158.78.44 1.06l3.414 3.415a1.5 1.5 0 0 0 1.06.439h4.172a1.5 1.5 0 0 0 1.06-.44l3.415-3.414A1.5 1.5 0 0 0 14 9.086V4.914a1.5 1.5 0 0 0-.44-1.06L10.147.439A1.5 1.5 0 0 0 9.086 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePolygonSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
