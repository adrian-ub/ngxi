import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRoutingIcon],svg[material-icon-theme-routing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#43a047" d="M18 14v-2h8l2-3l-2-3h-8V4l-2-2l-2 2v6H6l-2 3l2 3h8v10a4 4 0 0 0-4 4h12a4 4 0 0 0-4-4v-6h8l2-3l-2-3Z"></svg:path>`,
})
export class MaterialIconThemeRoutingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
