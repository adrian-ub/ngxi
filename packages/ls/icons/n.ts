import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsNIcon],svg[ls-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M72 128v64c42-40 109-64 171-64s109 24 151 64c44 42 72 102 72 168v294h-72V356c-2-87-64-157-151-157c-88 0-169 70-171 157v298H0V128z"></svg:path>`,
})
export class LsNIcon {
  readonly viewBox = input("0 0 466 654")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
