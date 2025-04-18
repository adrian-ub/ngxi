import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGreeIcon],svg[ls-gree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 532l309 172l309-172V176L309 4L0 176z"></svg:path>`,
})
export class LsGreeIcon {
  readonly viewBox = input("0 0 618 704")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
