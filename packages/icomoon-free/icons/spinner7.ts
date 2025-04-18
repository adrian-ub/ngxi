import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeSpinner7Icon],svg[icomoon-free-spinner7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 14.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 14.5M0 8a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 0 8m13 0a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 13 8M1.904 3.404a1.5 1.5 0 1 1 3.001.001a1.5 1.5 0 0 1-3.001-.001m9.192 9.192a1.5 1.5 0 1 1 3.001.001a1.5 1.5 0 0 1-3.001-.001m-9.192 0a1.5 1.5 0 1 1 3.001.001a1.5 1.5 0 0 1-3.001-.001m9.192-9.192a1.5 1.5 0 1 1 3.001.001a1.5 1.5 0 0 1-3.001-.001"></svg:path>`,
})
export class IcomoonFreeSpinner7Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
