import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFlagAltSolidIcon],svg[teenyicons-flag-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.254.065a.5.5 0 0 1 .503.006l10 6a.5.5 0 0 1-.033.876L3 11.81V15H2V.5a.5.5 0 0 1 .254-.435"></svg:path>`,
})
export class TeenyiconsFlagAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
