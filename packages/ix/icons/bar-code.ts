import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBarCodeIcon],svg[ix-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.334 85.333v341.333H42.667V85.333zm85.333 0v341.333H128V85.333zm85.333 0v341.333h-42.666V85.333zm213.334 0v341.333h-42.667V85.333zm-149.334 0v341.333h-21.333V85.333zm64 0v341.333h-21.333V85.333z"></svg:path>`,
})
export class IxBarCodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
