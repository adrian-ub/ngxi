import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFormCutIcon],svg[grommet-icons-form-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m18 7.524l-7.857 6.286zm0 8.38L10.143 9.62zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143a1.571 1.571 0 0 0 0 3.143Zm0 6.286a1.571 1.571 0 1 0 0-3.143a1.571 1.571 0 0 0 0 3.143Z"></svg:path>`,
})
export class GrommetIconsFormCutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
