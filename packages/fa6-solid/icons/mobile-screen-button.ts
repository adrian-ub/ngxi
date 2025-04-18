import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMobileScreenButtonIcon],svg[fa6-solid-mobile-screen-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm208 384a32 32 0 1 0-64 0a32 32 0 1 0 64 0m80-384H80v320h224z"></svg:path>`,
})
export class Fa6SolidMobileScreenButtonIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
