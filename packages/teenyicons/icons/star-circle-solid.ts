import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStarCircleSolidIcon],svg[teenyicons-star-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.5-4a.5.5 0 0 1 .453.288L8.92 5.85l2.155.33a.5.5 0 0 1 .282.843L9.784 8.636l.373 2.284a.5.5 0 0 1-.736.518L7.5 10.376l-1.921 1.062a.5.5 0 0 1-.736-.519l.373-2.283l-1.574-1.613a.5.5 0 0 1 .283-.844l2.154-.329l.968-2.062A.5.5 0 0 1 7.5 3.5" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsStarCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
