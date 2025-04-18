import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRobloxIcon],svg[material-icon-theme-roblox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m127.87 38.084l334.05 89.432l-36.055 135.03l-199.37-53.377l-10.251 38.177l-134.68-36.056zm244.26 423.83L38.08 372.482l36.056-135.03l199.01 53.377l10.251-38.176l135.03 36.055z" clip-rule="evenodd"></svg:path>`,
})
export class MaterialIconThemeRobloxIcon {
  readonly viewBox = input("0 0 500 500")
  readonly width = input("1em")
  readonly height = input("1em")
}
