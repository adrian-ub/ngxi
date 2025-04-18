import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFilesIcon],svg[codicon-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5zm0 2.12l2.38 2.38H17.5zm-3 20.38h-12v-15H7v9.07L8.5 18h6zm6-6h-12v-15H16V6h4.5z"></svg:path>`,
})
export class CodiconFilesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
