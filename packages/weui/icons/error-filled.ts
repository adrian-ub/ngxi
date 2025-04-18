import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiErrorFilledIcon],svg[weui-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.763-15.864l.11 7.596h1.305l.11-7.596zm.759 10.967c.512 0 .902-.383.902-.882c0-.5-.39-.882-.902-.882a.88.88 0 0 0-.896.882c0 .499.396.882.896.882"></svg:path>`,
})
export class WeuiErrorFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
