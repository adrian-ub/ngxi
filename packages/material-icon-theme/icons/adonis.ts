import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAdonisIcon],svg[material-icon-theme-adonis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="m79.579 25.741l-66.481 115.15h63.305l11.218-19.433H47.613L79.804 65.7l20.005 34.649l11.423-19.783zm42.118 50.221l-45.203 78.297h90.408z" paint-order="fill markers stroke"></svg:path>`,
})
export class MaterialIconThemeAdonisIcon {
  readonly viewBox = input("0 0 180 180")
  readonly width = input("1em")
  readonly height = input("1em")
}
