import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOpensourceIcon],svg[whh-opensource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M692 991L583 690q54-21 87.5-69.5T704 512q0-80-56-136t-136-56t-136 56t-56 136q0 60 33.5 108.5T441 690L332 991Q185 935 92.5 804.5T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 162-92.5 292.5T692 991"></svg:path>`,
})
export class WhhOpensourceIcon {
  readonly viewBox = input("0 0 1024 991")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
