import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsInsecureIcon],svg[grommet-icons-insecure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 6.919V6a4.724 4.724 0 0 1 5-5a4.724 4.724 0 0 1 5 5v5.052M12 23a7 7 0 1 0-7-7a7 7 0 0 0 7 7zm2.985-7h-5.97"></svg:path>`,
})
export class GrommetIconsInsecureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
