import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMobileIcon],svg[cil-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M380 16H132a32.036 32.036 0 0 0-32 32v416a32.036 32.036 0 0 0 32 32h248a32.036 32.036 0 0 0 32-32V48a32.036 32.036 0 0 0-32-32m0 32v32H132V48Zm0 64l.011 224H132V112Zm0 352H132v-96h248.016v96Z"></svg:path><svg:path fill="currentColor" d="M240 400h32v32h-32z"></svg:path>`,
})
export class CilMobileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
