import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStoreIcon],svg[zmdi-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 21v43H21V21zm21 214h-21v128h-43V235h-85v128H21V235H0v-43L21 85h342l21 107zm-192 85v-85H64v85z"></svg:path>`,
})
export class ZmdiStoreIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
