import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconToastIcon],svg[picon-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8V4q-3-4 3-4t3 4v4"></svg:path>`,
})
export class PiconToastIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
