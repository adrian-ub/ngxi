import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersIntersectSolidIcon],svg[teenyicons-layers-intersect-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 1.5V4H1.5A1.5 1.5 0 0 0 0 5.5v8A1.5 1.5 0 0 0 1.5 15h8a1.5 1.5 0 0 0 1.5-1.5V11h2.5A1.5 1.5 0 0 0 15 9.5v-8A1.5 1.5 0 0 0 13.5 0h-8A1.5 1.5 0 0 0 4 1.5M5.5 1a.5.5 0 0 0-.5.5V4h4.5A1.5 1.5 0 0 1 11 5.5V10h2.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5zm0 10A1.5 1.5 0 0 1 4 9.5V5H1.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V11z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLayersIntersectSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
