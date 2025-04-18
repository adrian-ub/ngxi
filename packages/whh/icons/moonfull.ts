import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMoonfullIcon],svg[whh-moonfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0Q408 0 313 40.5t-163.5 109T40.5 313T0 512t40.5 199t109 163.5t163.5 109t199 40.5t199-40.5t163.5-109t109-163.5t40.5-199t-40.5-199t-109-163.5T711 40.5T512 0"></svg:path>`,
})
export class WhhMoonfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
