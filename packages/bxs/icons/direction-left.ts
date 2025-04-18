import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsDirectionLeftIcon],svg[bxs-direction-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.707 11.294l-8.978-9a1 1 0 0 0-1.415-.002l-9.021 9a1 1 0 0 0 0 1.416l9.021 9c.39.389 1.026.388 1.415-.002l8.978-9a1 1 0 0 0 0-1.412M15 16h-2v-4h-3v2l-3-3l3-3v2h5z"></svg:path>`,
})
export class BxsDirectionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
