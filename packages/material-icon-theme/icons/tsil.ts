import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTsilIcon],svg[material-icon-theme-tsil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#795548" d="M14 13.3a.7.7 0 0 1-.7.7H8V8h6z"></svg:path><svg:path fill="#ffe57f" d="M14 8H8V2h5.3a.7.7 0 0 1 .7.7z"></svg:path><svg:path fill="#ffab40" d="M8 8H2V2.7a.7.7 0 0 1 .7-.7H8z"></svg:path><svg:path fill="#212121" d="M8 14H2.7a.7.7 0 0 1-.7-.7V8h6z"></svg:path>`,
})
export class MaterialIconThemeTsilIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
