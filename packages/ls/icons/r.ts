import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRIcon],svg[ls-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M71 128v64c42-40 99-64 161-64c19 0 38 3 55 7v75c-17-6-36-11-55-11c-87 0-159 70-161 157v298H0V128z"></svg:path>`,
})
export class LsRIcon {
  readonly viewBox = input("0 0 287 654")
  readonly width = input("0.44em")
  readonly height = input("1em")
}
