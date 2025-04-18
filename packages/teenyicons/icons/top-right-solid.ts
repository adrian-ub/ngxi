import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTopRightSolidIcon],svg[teenyicons-top-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1h6v6h-1V2.707L1.854 13.854l-.708-.708L12.293 2H8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsTopRightSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
