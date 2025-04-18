import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight02Icon],svg[carbon-direction-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 8l-1.414 1.414L22.172 14H10a2 2 0 0 0-2 2v12h2V16h12.172l-4.586 4.586L19 22l7-7zM8 4h2v8H8z"></svg:path>`,
})
export class CarbonDirectionRight02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
