import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRiotIcon],svg[material-icon-theme-riot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M20 4H4.5a.5.5 0 0 0-.5.5V22a6 6 0 0 0 6 6V10.5a.5.5 0 0 1 .5-.5H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V12a8 8 0 0 0-8-8"></svg:path><svg:path fill="#e53935" d="M24 16H14a6 6 0 0 0 6 6h1a1 1 0 0 1 1 1v5h2a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MaterialIconThemeRiotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
