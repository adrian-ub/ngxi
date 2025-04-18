import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPolygonFilledIcon],svg[ix-polygon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65L456.837 448H64V247.163z"></svg:path>`,
})
export class IxPolygonFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
