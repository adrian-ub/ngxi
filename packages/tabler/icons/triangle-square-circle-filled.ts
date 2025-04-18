import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTriangleSquareCircleFilledIcon],svg[tabler-triangle-square-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.132 2.504l-4 7A1 1 0 0 0 8 11h8a1 1 0 0 0 .868-1.496l-4-7a1 1 0 0 0-1.736 0M17 13a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13m-8 0H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class TablerTriangleSquareCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
