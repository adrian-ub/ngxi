import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSn1x1Icon],svg[flag-sn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#0b7226" d="M0 0h170.7v512H0z"></svg:path><svg:path fill="#ff0" d="M170.7 0h170.6v512H170.7z"></svg:path><svg:path fill="#bc0000" d="M341.3 0H512v512H341.3z"></svg:path></svg:g><svg:path fill="#0b7226" d="m197 351.7l22-71.7l-60.4-46.5h74.5l24.2-76l22.1 76H356L295.6 280l22.1 74l-60.3-46.5z"></svg:path>`,
})
export class FlagSn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
