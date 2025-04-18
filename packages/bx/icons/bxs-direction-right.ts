import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsDirectionRightIcon],svg[bx-bxs-direction-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2.295 12.707l8.978 9c.389.39 1.025.391 1.414.002l9.021-9a1 1 0 0 0 0-1.416l-9.021-9a.999.999 0 0 0-1.414.002l-8.978 9a.998.998 0 0 0 0 1.412zm6.707-2.706h5v-2l3 3l-3 3v-2h-3v4h-2v-6z" fill="currentColor"></svg:path>`,
})
export class BxBxsDirectionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
