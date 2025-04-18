import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMountFujiIcon],svg[fluent-emoji-flat-mount-fuji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#321B41" d="m19.31 12.92l-4.69-.03l-7.3 3.73L2 23.07v4.88c0 .58.47 1.05 1.04 1.05h24.167c.58 0 1.04-.47 1.04-1.04v-4.89z"></svg:path><svg:path fill="#6B438B" d="m16 15l1 4c.51 1.65 1.7 2 3 2h.05c.97 0 1.94.64 2.51 1.5L27 29l1.93.02c.59 0 1.07-.48 1.07-1.07v-4.88l-5.18-6.87z"></svg:path><svg:path fill="#F4F4F4" d="M20.73 10.76c-.36-.48-.86-.76-1.4-.76h-4.483c-1.392 4.748-.24 3.257.853 6.99c1.72 0 1.72-1 3.44-1s1.72 1 3.45 1c1.19 0 1.56-.48 2.24-.77z"></svg:path><svg:path fill="#CDC4D6" d="m18 10l-.364.121a3 3 0 0 0-1.962 3.574l.803 3.21a3.3 3.3 0 0 1-.777.085c-.866 0-1.298-.25-1.73-.501c-.43-.25-.86-.499-1.72-.499c-.866 0-1.298.25-1.73.501c-.43.25-.86.499-1.72.499c-.7 0-1.11-.17-1.48-.37l4.98-6.03c.34-.38.79-.59 1.25-.59z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMountFujiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
