import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRotateLeftIcon],svg[grommet-icons-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.52 3.43A9.1 9.1 0 0 0 5.7 5.55v-3.2H4.07v6.5h6.5V7.21H6.3a7.46 7.46 0 1 1-1.47 8.65l-1.46.73a9.11 9.11 0 1 0 8.15-13.16"></svg:path>`,
})
export class GrommetIconsRotateLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
