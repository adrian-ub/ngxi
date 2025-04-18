import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight01Icon],svg[carbon-direction-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 4l-1.414 1.414L22.172 10H10a2 2 0 0 0-2 2v16h2V12h12.172l-4.586 4.586L19 18l7-7Z"></svg:path>`,
})
export class CarbonDirectionRight01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
