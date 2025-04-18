import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatRotate90Icon],svg[mdi-format-rotate-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.34 6.41L.86 12.9l6.49 6.48l6.49-6.48zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66zm15.67-6.26A8.95 8.95 0 0 0 13 4V.76L8.76 5L13 9.24V6c1.79 0 3.58.68 4.95 2.05a7.007 7.007 0 0 1 0 9.9a6.97 6.97 0 0 1-7.79 1.44l-1.49 1.49C10 21.62 11.5 22 13 22c2.3 0 4.61-.88 6.36-2.64a8.98 8.98 0 0 0 0-12.72"></svg:path>`,
})
export class MdiFormatRotate90Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
