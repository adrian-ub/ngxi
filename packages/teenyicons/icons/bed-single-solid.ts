import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBedSingleSolidIcon],svg[teenyicons-bed-single-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h1v-4h13v4h1V4h-1v3H1V0H0z"></svg:path><svg:path fill="currentColor" d="M6 6H2V5h4z"></svg:path>`,
})
export class TeenyiconsBedSingleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
