import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlusIcon],svg[ix-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 64v170.666H448v42.667H277.333V448h-42.666l-.001-170.667H64v-42.666l170.666-.001V64z"></svg:path>`,
})
export class IxPlusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
