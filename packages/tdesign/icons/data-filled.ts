import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDataFilledIcon],svg[tdesign-data-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.226 2h20v9h-20zm6.002 3.5H6.224v2.004h2.004zM2.226 13h20v9h-20zm6.002 3.5H6.224v2.004h2.004z"></svg:path>`,
})
export class TdesignDataFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
