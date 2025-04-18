import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVirtualIcon],svg[material-icon-theme-virtual-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#039be5" d="M28 24V6H4v18H2v2h28v-2Zm-8 0h-8v-2h8Zm6-4H6V8h20Z"></svg:path>`,
})
export class MaterialIconThemeVirtualIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
