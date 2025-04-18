import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSmellIcon],svg[carbon-smell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v-5h-2v7h2a3 3 0 0 1 0 6h-1v-2h-2v2a3 3 0 0 1-6 0v-2h-2v2h-1a3 3 0 0 1 0-6h2V9a3 3 0 0 1 3-3h1V4h-1a5 5 0 0 0-5 5v6a5 5 0 0 0 0 10h1.42a5 5 0 0 0 9.16 0H22a5 5 0 0 0 0-10"></svg:path>`,
})
export class CarbonSmellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
