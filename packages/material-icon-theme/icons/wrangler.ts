import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWranglerIcon],svg[material-icon-theme-wrangler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f57f17" d="M22 20H10.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H22v-6.449A5.95 5.95 0 0 0 18 10h-2a5.98 5.98 0 0 0-4.463 2H10a4 4 0 0 0-4 4a4 4 0 0 0-4 4v1.5a.5.5 0 0 0 .5.5H22Z"></svg:path><svg:path fill="#ffab40" d="M24 14v4h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H24v2h5.5a.5.5 0 0 0 .5-.5V20a6 6 0 0 0-6-6"></svg:path>`,
})
export class MaterialIconThemeWranglerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
