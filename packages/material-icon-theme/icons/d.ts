import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeDIcon],svg[material-icon-theme-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f44336" d="M21.805 8.063a5 5 0 0 0-3.502.727A10.95 10.95 0 0 0 11 6H2.5a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5H11a10.995 10.995 0 0 0 10.954-10.096a4.998 4.998 0 0 0-.149-9.841M11 24H6V10h5a7 7 0 0 1 0 14"></svg:path><svg:circle cx="28" cy="7" r="1.5" fill="#f44336"></svg:circle>`,
})
export class MaterialIconThemeDIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
