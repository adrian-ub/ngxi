import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBugIcon],svg[grommet-icons-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M23 20c-1.38-2.09-3-3-4-3M5 17c-1 0-2.62.91-4 3M19 9c3 0 4-3 4-3M1 6s1 3 4 3m14 4h5zM5 13H0zm7 10V12zm0 0c-4 0-7-3-7-7V9s3-2.012 7-2s7 2 7 2v7c0 4-3 7-7 7ZM7 8V6c0-2.76 2.24-5 5-5s5 2.24 5 5v2"></svg:path>`,
})
export class GrommetIconsBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
