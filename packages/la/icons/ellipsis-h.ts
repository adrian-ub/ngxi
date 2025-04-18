import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEllipsisHIcon],svg[la-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m10 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4m10 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4"></svg:path>`,
})
export class LaEllipsisHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
