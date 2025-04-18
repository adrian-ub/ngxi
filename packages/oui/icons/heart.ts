import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiHeartIcon],svg[oui-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.402 3.098a3.75 3.75 0 0 0-5.304 5.304l5.558 5.27L8 14l5.892-5.588a3.75 3.75 0 1 0-5.294-5.313L8 3.697zM2.796 7.685a2.747 2.747 0 0 1 .01-3.88a2.75 2.75 0 0 1 3.889 0L8 5.111l1.305-1.306a2.75 2.75 0 1 1 3.89 3.89L8 12.62z"></svg:path>`,
})
export class OuiHeartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
