import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowUpLeftIcon],svg[mdi-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v2h-6.5A6.5 6.5 0 0 1 7 13.5V7.83l-3.09 3.09L2.5 9.5L8 4l5.5 5.5l-1.41 1.41L9 7.83v5.67C9 16 11 18 13.5 18z"></svg:path>`,
})
export class MdiArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
