import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFontroundedIcon],svg[whh-fontrounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736.992 192h-224v736q0 40-28 68t-68 28t-68-28t-28-68V192h-224q-40 0-68-28t-28-68t28-68t68-28h640q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhFontroundedIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
