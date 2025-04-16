import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsLockClosedIcon],svg[radix-icons-lock-closed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4.636c0-.876.242-1.53.643-1.962c.396-.427 1.003-.696 1.858-.696s1.462.269 1.857.694c.4.431.642 1.085.642 1.961V6H5zM4 6V4.636c0-1.055.293-1.978.91-2.643c.623-.67 1.517-1.015 2.591-1.015s1.969.344 2.59 1.014c.617.664.909 1.587.909 2.641V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 7h9v6H3z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsLockClosedIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
