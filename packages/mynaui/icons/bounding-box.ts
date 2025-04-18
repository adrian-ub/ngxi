import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBoundingBoxIcon],svg[mynaui-bounding-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17V7m0 10a2 2 0 1 0 2 2m-2-2a2 2 0 0 1 2 2M5 7a2 2 0 0 0 2-2M5 7a2 2 0 1 1 2-2m0 0h10m0 0a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2m0 0v10m0 0a2 2 0 0 0-2 2m2-2a2 2 0 1 1-2 2M7 19h10"></svg:path>`,
})
export class MynauiBoundingBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
