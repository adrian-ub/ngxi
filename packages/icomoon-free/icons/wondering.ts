import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWonderingIcon],svg[icomoon-free-wondering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M8 1.5a6.5 6.5 0 1 1 0 13a6.5 6.5 0 0 1 0-13m3.652 7.9l.351 1.2l-6.828 2l-.351-1.2zM4 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class IcomoonFreeWonderingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
