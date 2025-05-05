import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeartbrokenIcon],svg[picon-heartbroken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8V5H3l1.5-3H6L5 4h1zl2-2c4-4-1-6-2-3c-1-3-6-1-2 3"></svg:path>`,
})
export class PiconHeartbrokenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
