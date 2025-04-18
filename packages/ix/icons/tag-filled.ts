import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTagFilledIcon],svg[ix-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 256V64h192l213.333 213.333l-192 192zm96-64c17.673 0 32-14.327 32-32s-14.327-32-32-32s-32 14.327-32 32s14.327 32 32 32" clip-rule="evenodd"></svg:path>`,
})
export class IxTagFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
