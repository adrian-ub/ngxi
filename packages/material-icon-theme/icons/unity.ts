import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeUnityIcon],svg[material-icon-theme-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="M8 6.5L5 5l2-1V2L2 5v5l2-1V6.5L7 8v4.5L4 11l-2 1l6 3l6-3l-2-1l-3 1.5V8l3-1.5V9l2 1V5L9 2v2l2 1Z"></svg:path>`,
})
export class MaterialIconThemeUnityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
