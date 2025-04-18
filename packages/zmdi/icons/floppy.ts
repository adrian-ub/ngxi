import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFloppyIcon],svg[zmdi-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 0l85 85v256q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM192 341q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19t-45.5 19t-18.5 45.5t18.5 45T192 341m64-213V43H43v85z"></svg:path>`,
})
export class ZmdiFloppyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
