import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiIkeaJakobsbynIcon],svg[cbi-ikea-jakobsbyn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.853 16.727l-.02-.567c-.029-4.205 3.15-6.436 5.264-6.661V2.83H12.1v6.668c2.137.053 5.265 2.729 5.265 6.661l.021.428c-.004 1.355-.939 3.466-1.398 4.08h-8.78c-.458-.614-1.33-2.269-1.355-3.94m11.022.574l-10.559.023c.215 1.275.445 1.704.99 2.549c3.026-.027 5.313.043 8.53.028c.505-.744.74-1.396 1.039-2.6"></svg:path>`,
})
export class CbiIkeaJakobsbynIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
