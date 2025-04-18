import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNewspaperVariantMultipleIcon],svg[mdi-newspaper-variant-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v12h15v2H4c-2 0-2-2-2-2V7zm17.3-4H7.7C6.76 3 6 3.7 6 4.55v10.9c0 .86.76 1.55 1.7 1.55h13.6c.94 0 1.7-.69 1.7-1.55V4.55C23 3.7 22.24 3 21.3 3M8 5h5v6H8zm13 10H8v-2h13zm0-4h-6V9h6zm0-4h-6V5h6z"></svg:path>`,
})
export class MdiNewspaperVariantMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
