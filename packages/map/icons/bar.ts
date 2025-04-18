import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapBarIcon],svg[map-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82L46 1zm6.3 5.646h29.399l-1.312 11.295H11.613z"></svg:path>`,
})
export class MapBarIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
