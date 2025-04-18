import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBoldIcon],svg[la-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7c2.8 0 5 2.2 5 5c0 1.3-.5 2.398-1.3 3.3c1.902.7 3.3 2.5 3.3 4.7c0 2.8-2.2 5-5 5H7V7zm-7 8h7c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm0 8h9c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm7-18H5v22h13c3.898 0 7-3.102 7-7c0-2.102-1-4.102-2.5-5.398c.3-.801.5-1.704.5-2.602c0-3.898-3.102-7-7-7m-5 6h5c.602 0 1 .398 1 1s-.398 1-1 1h-5zm0 8h7c.602 0 1 .398 1 1s-.398 1-1 1h-7z"></svg:path>`,
})
export class LaBoldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
