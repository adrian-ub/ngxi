import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwMinusIcon],svg[uiw-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.7 10.4A.7.7 0 0 1 .7 9h18.606a.7.7 0 0 1 0 1.4z"></svg:path>`,
})
export class UiwMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
