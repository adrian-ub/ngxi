import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeZigIcon],svg[material-icon-theme-zig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f9a825" d="M2 8h6v4H2zm8 0h12v4H10zm0 12h12v4H10zm14 0h2v4h-2zM8 20l-3 4H2V12h4v8zm14-8h-6l-6 8h6z"></svg:path><svg:path fill="#f9a825" d="M16 20h-6l-6 8m12-16h6l6-8m2 4v16h-4V12h-2l3-4z"></svg:path>`,
})
export class MaterialIconThemeZigIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
