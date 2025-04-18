import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemePoetryIcon],svg[material-icon-theme-poetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f51b5" d="M20.137 17.834A18.52 18.52 0 0 1 6 24l5 6a25.1 25.1 0 0 0 13-8Z"></svg:path><svg:path fill="#1976d2" d="M6 2v22a18.52 18.52 0 0 0 14.137-6.166Z"></svg:path><svg:path fill="#29b6f6" d="m6 2l14.137 15.834A23.7 23.7 0 0 0 26 2Z"></svg:path>`,
})
export class MaterialIconThemePoetryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
