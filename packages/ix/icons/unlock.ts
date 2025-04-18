import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUnlockIcon],svg[ix-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c70.49 0 128 56.628 128 126.933h-42.667c0-46.337-38.003-84.266-85.333-84.266c-47.331 0-85.334 37.929-85.334 84.266V256h256v213.334H85.333V256H128v-86.4c0-70.305 57.51-126.933 128-126.933m128 256H128v128h256z"></svg:path>`,
})
export class IxUnlockIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
