import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBowTieSolidIcon],svg[streamline-bow-tie-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.95 9.28l3.703.89c.162.039.332.042.495.01c.164-.033.317-.1.448-.197a1 1 0 0 0 .305-.362A.94.94 0 0 0 14 9.17V4.79a.94.94 0 0 0-.098-.45a1 1 0 0 0-.305-.363a1.1 1.1 0 0 0-.447-.197a1.2 1.2 0 0 0-.496.01l-3.713.922A3 3 0 0 1 10 7c0 .912-.407 1.73-1.05 2.28M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-5.653 1.19L5.05 9.3A3 3 0 0 1 4 7.02a2.99 2.99 0 0 1 1.06-2.288L1.347 3.81a1.2 1.2 0 0 0-.495-.01c-.164.033-.317.1-.448.197a1 1 0 0 0-.305.362a.94.94 0 0 0-.098.451v4.38a.94.94 0 0 0 .098.45c.07.142.174.266.305.363c.13.097.284.164.448.197c.163.032.333.029.495-.01" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBowTieSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
