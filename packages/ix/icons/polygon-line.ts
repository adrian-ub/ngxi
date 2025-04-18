import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPolygonLineIcon],svg[ix-polygon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 33.83v234.65l143.085 143.102L456.836 448H64v-42.667h289.813L240.915 292.418l-6.249-6.248V136.832L85.333 286.17L55.163 256l15.085-15.085L240.915 70.248z"></svg:path>`,
})
export class IxPolygonLineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
