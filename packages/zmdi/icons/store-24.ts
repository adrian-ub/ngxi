import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiStore24Icon],svg[zmdi-store-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 85h64v278H256v-86h-85v86H0V85h64V21h299zm-171 64V85h-64v22h43v21h-43v64h64v-21h-43v-22zm107 43V85h-22v43h-21V85h-21v64h42v43z"></svg:path>`,
})
export class ZmdiStore24Icon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
