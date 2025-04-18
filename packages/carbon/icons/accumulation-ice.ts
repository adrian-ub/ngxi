import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAccumulationIceIcon],svg[carbon-accumulation-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v8l1 2l1-2V8zm-4 0v10l1 2l1-2V8z"></svg:path><svg:path fill="currentColor" d="M28 4a2 2 0 0 0-2 2v20H6v-4h4v-2H6v-4h4v-2H6v-4h8v4l1 2l1-2V8H6V6a2 2 0 0 0-2-2H2v2h2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6h2V4Z"></svg:path>`,
})
export class CarbonAccumulationIceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
