import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeAngularIcon],svg[material-icon-theme-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e53935" d="M9.87 2.5L3.022 5.666l.645 10.178zm4.26 0l6.202 13.344l.645-10.178zM12 7.563l-2.451 5.964h4.906zm-3.73 8.959l-.954 2.308L12 21.5l4.683-2.67l-.953-2.308z"></svg:path>`,
})
export class MaterialIconThemeAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
