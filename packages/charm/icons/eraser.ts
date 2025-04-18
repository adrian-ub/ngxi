import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmEraserIcon],svg[charm-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.25 13.25h-9.5l-3-3l7.5-7.5l5 5l-5.5 5.5m-3.5-6.5l5 5"></svg:path>`,
})
export class CharmEraserIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
