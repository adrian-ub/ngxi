import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidArchwayIcon],svg[fa6-solid-archway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h448c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h128V352c0-53 43-96 96-96s96 43 96 96v128h128c17.7 0 32-14.3 32-32s-14.3-32-32-32V128H32z"></svg:path>`,
})
export class Fa6SolidArchwayIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
