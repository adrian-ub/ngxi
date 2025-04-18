import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAdjustVerticalSolidIcon],svg[teenyicons-adjust-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0v6H0v3h2v6h1V9h2V6H3V0zm3 10h2V0h1v10h2v3H8v2H7v-2H5zm7-10v2h-2v3h2v10h1V5h2V2h-2V0z"></svg:path>`,
})
export class TeenyiconsAdjustVerticalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
