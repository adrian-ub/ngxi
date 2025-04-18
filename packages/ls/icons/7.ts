import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls7Icon],svg[ls-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 71V0h467L73 754L9 721L349 71z"></svg:path>`,
})
export class Ls7Icon {
  readonly viewBox = input("0 0 467 754")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
