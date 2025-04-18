import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeJavascriptMapIcon],svg[material-icon-theme-javascript-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ffca28"><svg:path d="M12 5v1h1v7H6v-1H5l-.069 2l9.069.001V5z"></svg:path><svg:path d="M2 2v9h9V2zm3 3h1v4a1.003 1.003 0 0 1-1 1H4a1.003 1.003 0 0 1-1-1V8h1v1h1zm3 0h2v1H8v1h1a1.003 1.003 0 0 1 1 1v1a1.003 1.003 0 0 1-1 1H7V9h2V8H8a1.003 1.003 0 0 1-1-1V6a1.003 1.003 0 0 1 1-1"></svg:path></svg:g>`,
})
export class MaterialIconThemeJavascriptMapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
