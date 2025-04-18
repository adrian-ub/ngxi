import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBreadIcon],svg[fe-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19v-8.689l.999-.577A2 2 0 0 0 19 8V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1c0 .723.386 1.377 1.001 1.734L7 10.31V19zm2 0a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7.535A4 4 0 0 1 3 8V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v1c0 1.48-.804 2.773-2 3.465z"></svg:path>`,
})
export class FeBreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
