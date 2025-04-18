import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWondering2Icon],svg[icomoon-free-wondering2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2M4 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1.176 7.6l-.351-1.2l6.828-2l.351 1.2z"></svg:path>`,
})
export class IcomoonFreeWondering2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
