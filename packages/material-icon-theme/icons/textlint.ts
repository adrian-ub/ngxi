import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTextlintIcon],svg[material-icon-theme-textlint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f06292" d="M10 22V8H4v20h24v-6z"></svg:path><svg:path fill="#00e5ff" d="M14 8h4v20h-4z"></svg:path><svg:path fill="#00e5ff" d="M4 4h24v6H4z"></svg:path>`,
})
export class MaterialIconThemeTextlintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
