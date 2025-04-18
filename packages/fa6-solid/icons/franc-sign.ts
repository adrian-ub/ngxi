import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFrancSignIcon],svg[fa6-solid-franc-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32c-17.7 0-32 14.3-32 32v256H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h16v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64h80c17.7 0 32-14.3 32-32s-14.3-32-32-32h-80v-64h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V96h176c17.7 0 32-14.3 32-32s-14.3-32-32-32z"></svg:path>`,
})
export class Fa6SolidFrancSignIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
