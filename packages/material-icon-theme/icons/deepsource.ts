import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDeepsourceIcon],svg[material-icon-theme-deepsource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1de9b6" d="M2 2h9a1 1 0 0 1 1 .992A1 1 0 0 1 11 4H2z"></svg:path><svg:path fill="#f44336" d="M2 12h11a1 1 0 0 1 1 1a1 1 0 0 1-1 1H2z"></svg:path><svg:path fill="#ffb300" d="M2 9h7a1 1 0 0 0 1-1a1 1 0 0 0-1-1H2z"></svg:path>`,
})
export class MaterialIconThemeDeepsourceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
