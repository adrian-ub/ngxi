import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTriangleIcon],svg[uil-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.87 19.29l-9-15.58a1 1 0 0 0-1.74 0l-9 15.58a1 1 0 0 0 0 1a1 1 0 0 0 .87.5h18a1 1 0 0 0 .87-.5a1 1 0 0 0 0-1m-17.14-.5L12 6.21l7.27 12.58Z"></svg:path>`,
})
export class UilTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
