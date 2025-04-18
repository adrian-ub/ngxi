import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBridgeIcon],svg[fa6-solid-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h40v64H0v128c53 0 96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96s96 43 96 96v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64c0-53 43-96 96-96V160h-72V96h40c17.7 0 32-14.3 32-32s-14.3-32-32-32zm424 64v64h-80V96zm-128 0v64h-80V96zm-128 0v64h-80V96z"></svg:path>`,
})
export class Fa6SolidBridgeIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
