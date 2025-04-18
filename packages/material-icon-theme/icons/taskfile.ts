import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTaskfileIcon],svg[material-icon-theme-taskfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4db6ac" d="M4 9v14l12 6V15z"></svg:path><svg:path fill="#b2dfdb" d="M16 3L4 9l12 6l12-6z"></svg:path><svg:path fill="#80cbc4" d="M16 15v14l12-6V9z"></svg:path>`,
})
export class MaterialIconThemeTaskfileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
