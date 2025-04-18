import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeHipsterIcon],svg[icomoon-free-hipster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13M4 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" d="M10.561 8.439a1.5 1.5 0 1 0-2.063 2.176c1.352 1.227 4.503-.029 4.503-1.615c-.969.625-1.726.153-2.439-.561z"></svg:path><svg:path fill="currentColor" d="M5.439 8.439a1.5 1.5 0 1 1 2.063 2.176C6.15 11.842 2.999 10.586 2.999 9c.969.625 1.726.153 2.439-.561z"></svg:path>`,
})
export class IcomoonFreeHipsterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
