import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRadioIcon],svg[carbon-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-4V2h-2v8h-9V8h-2v2H8V8H6v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 28V12h24v16Z"></svg:path><svg:path fill="currentColor" d="M10 26a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-3-6h6v2H7zm10 2h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9z"></svg:path>`,
})
export class CarbonRadioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
