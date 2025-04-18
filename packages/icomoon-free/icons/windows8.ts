import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeWindows8Icon],svg[icomoon-free-windows8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.005 8L0 3.124l6-.815V8zM7 2.164L14.998 1v7H7zM15 9l-.002 7L7 14.875V9zm-9 5.747l-5.995-.822V8.999H6z"></svg:path>`,
})
export class IcomoonFreeWindows8Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
