import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleInvertedIcon],svg[tabler-triangle-inverted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.363 20.405L2.257 6.871A1.914 1.914 0 0 1 3.893 4h16.214a1.914 1.914 0 0 1 1.636 2.871l-8.106 13.534a1.914 1.914 0 0 1-3.274 0"></svg:path>`,
})
export class TablerTriangleInvertedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
