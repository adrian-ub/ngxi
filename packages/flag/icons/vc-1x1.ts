import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVc1x1Icon],svg[flag-vc-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#f4f100" d="M0 0h510.4v512H0z"></svg:path><svg:path fill="#199a00" d="M385.6 0H512v512H385.6z"></svg:path><svg:path fill="#0058aa" d="M0 0h126.4v512H0z"></svg:path></svg:g><svg:path fill="#199a00" fill-rule="evenodd" d="m191.2 138.6l-49.5 76.2l47.8 79.3l46.7-78.6zm129.4 0L271 214.8l47.7 79.3l46.8-78.6l-45-76.9zm-65.4 103.9l-49.4 76.1l47.7 79.4l46.7-78.7z"></svg:path>`,
})
export class FlagVc1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
