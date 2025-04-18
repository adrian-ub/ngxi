import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsotherIcon],svg[cbi-roomsother-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.142 2.74c.492.071.858.497.858 1v24.52c0 .503-.366.929-.858 1l-12 1.73a1.003 1.003 0 0 1-1.142-1V28H7.052A1.055 1.055 0 0 1 6 26.949V5.052c0-.58.473-1.053 1.052-1.053H12V2.01c0-.614.539-1.086 1.142-.999zM15 17a1 1 0 1 0 0-2a1 1 0 1 0 0 2m-7 9h4V6H8z"></svg:path>`,
})
export class CbiRoomsotherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
