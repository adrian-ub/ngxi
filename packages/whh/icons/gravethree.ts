import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGravethreeIcon],svg[whh-gravethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-45 51.5-84T192 874V320q0-87 43-160.5T351.5 43T512 0t160.5 43T789 159.5T832 320v554q89 27 140.5 66t51.5 84"></svg:path>`,
})
export class WhhGravethreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
