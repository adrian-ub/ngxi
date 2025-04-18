import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls4Icon],svg[ls-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M398 0v494h89v72h-89v209h-71V566H0zM138 494h189V227z"></svg:path>`,
})
export class Ls4Icon {
  readonly viewBox = input("0 0 487 775")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
