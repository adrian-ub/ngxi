import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsRotateRightIcon],svg[grommet-icons-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.48 3.43a9.1 9.1 0 0 1 5.82 2.12v-3.2h1.64v6.5h-6.5V7.21h4.26a7.46 7.46 0 1 0 1.47 8.65l1.46.73a9.11 9.11 0 1 1-8.15-13.16"></svg:path>`,
})
export class GrommetIconsRotateRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
