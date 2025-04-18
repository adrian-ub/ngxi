import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight02FilledIcon],svg[carbon-direction-right-02-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 6h2v8H8Zm11 18l-1.414-1.414L22.172 18H10v8H8v-8a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 10l7 7Z"></svg:path><svg:path fill="none" d="M8 6h2v8H8Zm11 18l-1.414-1.414L22.172 18H10v8H8v-8a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 10l7 7Z"></svg:path>`,
})
export class CarbonDirectionRight02FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
