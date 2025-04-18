import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEllipsisVIcon],svg[la-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m0 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaEllipsisVIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
