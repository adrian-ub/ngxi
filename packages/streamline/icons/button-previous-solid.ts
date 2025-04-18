import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonPreviousSolidIcon],svg[streamline-button-previous-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.238 6.056l7.819-5.4c.396-.25.878-.183 1.226.08c.269.201.458.519.467.897v10.705c0 .884-.979 1.456-1.693 1.004l-7.82-5.367c-.65-.439-.65-1.48 0-1.919ZM0 1.742a1 1 0 1 1 2 0v10.516a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonPreviousSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
