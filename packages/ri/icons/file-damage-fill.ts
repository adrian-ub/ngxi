import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileDamageFillIcon],svg[ri-file-damage-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 14l4 2.5l3-3.5l3 4l2-2.5l3 .5l-3-3l-2 2.5l-3-5l-3.5 3.75L3 10V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008zm18-7h-5V2.003z"></svg:path>`,
})
export class RiFileDamageFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
