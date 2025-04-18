import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidFileFragmentIcon],svg[fa6-solid-file-fragment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H192V384c0-35.3-28.7-64-64-64H0zm384 64H256V0zM32 352h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"></svg:path>`,
})
export class Fa6SolidFileFragmentIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
