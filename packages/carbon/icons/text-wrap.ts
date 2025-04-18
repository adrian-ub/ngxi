import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextWrapIcon],svg[carbon-text-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 23h8v2H4zm20.523-9H4v2h20.5a3.5 3.5 0 0 1 0 7h-5.672l2.586-2.586L20 19l-5 5l5 5l1.414-1.414L18.828 25h5.705a5.5 5.5 0 0 0-.01-11M4 5h24v2H4z"></svg:path>`,
})
export class CarbonTextWrapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
