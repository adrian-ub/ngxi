import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiClose2FilledIcon],svg[weui-close2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m13.06 12l3.006-3.005l-1.06-1.06L12 10.938L8.995 7.934l-1.06 1.06L10.938 12l-3.005 3.005l1.06 1.06L12 13.062l3.005 3.005l1.06-1.06L13.062 12zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class WeuiClose2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
