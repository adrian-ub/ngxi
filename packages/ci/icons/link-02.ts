import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLink02Icon],svg[ci-link-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.465 20.535A5 5 0 0 1 4.929 12L7.05 9.878l1.414 1.414l-2.121 2.121a3 3 0 1 0 4.243 4.243l2.12-2.121l1.415 1.415L12 19.071a4.969 4.969 0 0 1-3.536 1.464Zm.707-4.293l-1.414-1.414l7.07-7.071l1.415 1.414l-7.07 7.07l-.001.001Zm7.779-2.121l-1.415-1.414l2.12-2.121a3 3 0 1 0-4.241-4.243l-2.122 2.121L9.879 7.05L12 4.928a5 5 0 0 1 7.07 7.071l-2.12 2.121v.001Z"></svg:path>`,
})
export class CiLink02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
