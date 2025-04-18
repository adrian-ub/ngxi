import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDividerLineSolidIcon],svg[teenyicons-divider-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2H3V1h9zm-2 3H3V4h7zm5 3H0V7h15zm-3 3H3v-1h9zm-2 3H3v-1h7z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDividerLineSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
