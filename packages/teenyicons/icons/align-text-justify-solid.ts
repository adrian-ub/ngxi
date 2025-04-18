import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAlignTextJustifySolidIcon],svg[teenyicons-align-text-justify-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 4H0V3h15zm0 4H0V7h15zm0 4H0v-1h15z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsAlignTextJustifySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
