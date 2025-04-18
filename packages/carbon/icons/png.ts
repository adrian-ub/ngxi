import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPngIcon],svg[carbon-png-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h4v-4h-2v-2h4zm-12-4L14.32 9H12v14h2V13l3.68 10H20V9h-2zM4 23H2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4zm0-7h4v-5H4z"></svg:path>`,
})
export class CarbonPngIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
