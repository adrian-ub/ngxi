import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLogOutIcon],svg[ix-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M320 42.667V128h-42.666l-.001-42.666H128v341.333h149.333V384H320v85.334H85.333V42.667zm57.751 112.915L478.17 256L377.75 356.42l-30.17-30.17l48.915-48.916H192v-42.666h204.496l-48.915-48.915z"></svg:path>`,
})
export class IxLogOutIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
