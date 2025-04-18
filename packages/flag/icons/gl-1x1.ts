import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGl1x1Icon],svg[flag-gl-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#d00c33" d="M0 256h512v256H0zm53.3 0a170.7 170.7 0 1 0 341.4 0a170.7 170.7 0 0 0-341.4 0"></svg:path>`,
})
export class FlagGl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
