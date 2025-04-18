import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGitterIcon],svg[cib-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.15 20.156H5V0h3.15zm6.281-15.4h-3.15V32h3.15zm6.288 0h-3.15V32h3.15zM27 4.75h-3.15v15.438H27z"></svg:path>`,
})
export class CibGitterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
