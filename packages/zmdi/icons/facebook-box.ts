import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFacebookBoxIcon],svg[zmdi-facebook-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 88h-54q-31 0-52.5 22T235 163v53h-43v64h43v149h64V280h64v-64h-64v-43q0-8 6-14.5t15-6.5h43zM0 3h427v426H0z"></svg:path>`,
})
export class ZmdiFacebookBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
