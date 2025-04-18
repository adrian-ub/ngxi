import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppFilebeatIcon],svg[oui-app-filebeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 18h16v2H8zm0-5h9v2H8zm0 10h16v2H8z" class="ouiIcon__fillSecondary"></svg:path><svg:path d="M21.41 0H5a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V8.59zM22 3.41L26.59 8H22zM27 30H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h15v8h8v19a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class OuiAppFilebeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
