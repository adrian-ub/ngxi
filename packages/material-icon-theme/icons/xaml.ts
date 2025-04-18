import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeXamlIcon],svg[material-icon-theme-xaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#42a5f5" d="m32 16l-5.387 9.333L24.307 24l4.613-8l-4.613-8l2.306-1.333z"></svg:path><svg:path fill="#42a5f5" d="m25.24 16l-4.627 8h-9.226L6.76 16l4.627-8h9.226z"></svg:path><svg:path fill="#42a5f5" d="m0 16l5.387-9.333L7.693 8L3.08 16l4.613 8l-2.306 1.333z"></svg:path>`,
})
export class MaterialIconThemeXamlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
