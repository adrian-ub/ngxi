import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilRouterIcon],svg[cil-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m443.057 132.943l22.634-22.634a143.764 143.764 0 0 0-211.382 0l22.634 22.634a111.84 111.84 0 0 1 166.114 0"></svg:path><svg:path fill="currentColor" d="m299.615 155.615l22.7 22.7a47.913 47.913 0 0 1 75.362 0l22.7-22.7a79.83 79.83 0 0 0-120.77 0ZM472 280h-96v-64h-32v64H40a24.03 24.03 0 0 0-24 24v112a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V304a24.03 24.03 0 0 0-24-24m-8 128H48v-96h416Z"></svg:path><svg:path fill="currentColor" d="M96 344h32v32H96zm80 0h32v32h-32zm80 0h32v32h-32z"></svg:path>`,
})
export class CilRouterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
