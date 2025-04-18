import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePyramidShapeIcon],svg[streamline-pyramid-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.99 10.444l-5.593 2.528a1 1 0 0 1-.824 0L.979 10.441a.5.5 0 0 1-.21-.734l5.8-8.678a.5.5 0 0 1 .831 0l5.8 8.681a.5.5 0 0 1-.21.733ZM6.984.938v12.124"></svg:path>`,
})
export class StreamlinePyramidShapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
