import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFormImageOutlineIcon],svg[bubbles-form-image-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" clip-path="url(#bubblesFormImageOutline0)"><svg:path d="M22.477 22.25a1.5 1.5 0 0 1-1.5 1.5H3.023a1.5 1.5 0 0 1-1.5-1.5V2.75a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.047.426l2.955 2.883a1.5 1.5 0 0 1 .452 1.074z"></svg:path><svg:path d="M8.273 10.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m10.54 8.45l-3.925-5.888a1.01 1.01 0 0 0-1.671-.02l-2.691 3.846L8.858 15.3a1.01 1.01 0 0 0-1.474.229l-2.111 3.17"></svg:path></svg:g><svg:defs><svg:clippath id="bubblesFormImageOutline0"><svg:path fill="#fff" d="M0 .5h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class BubblesFormImageOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
