import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeGlass2Icon],svg[icomoon-free-glass2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.893 2.809a.499.499 0 0 0-.393-.808h-11a.501.501 0 0 0-.393.808L7 9.037V15H5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1H9V9.037zM12.471 3L10.9 5H5.1L3.529 3z"></svg:path>`,
})
export class IcomoonFreeGlass2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
