import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRestoreIcon],svg[whh-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640h-64V512q27 0 45.5-19t18.5-45V192q0-27-18.5-45.5T832 128H448q-27 0-45.5 18.5T384 192v128H256V128q0-53 37.5-90.5T384 0h512q53 0 90.5 37.5T1024 128v384q0 53-37.5 90.5T896 640M768 512v384q0 53-37.5 90.5T640 1024H128q-53 0-90.5-37.5T0 896V512q0-53 37.5-90.5T128 384h512q53 0 90.5 37.5T768 512m-192 0H192q-27 0-45.5 18.5T128 576v256q0 26 18.5 45t45.5 19h384q27 0 45.5-19t18.5-45V576q0-27-18.5-45.5T576 512"></svg:path>`,
})
export class WhhRestoreIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
