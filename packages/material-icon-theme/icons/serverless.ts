import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeServerlessIcon],svg[material-icon-theme-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M12.897 6H2v4h9.613zm4.201 0l-1.284 4H30V6zm-2.568 8l-1.283 4H30v-4zm-4.2 0H2v4h7.046zm1.633 8l-1.283 4H30v-4zm-4.201 0H2v4h4.479z"></svg:path>`,
})
export class MaterialIconThemeServerlessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
