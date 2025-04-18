import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDone2OutlinedIcon],svg[weui-done2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m-1.172-6.242l5.809-5.808l.848.849l-5.95 5.95a1 1 0 0 1-1.414 0L7 12.426l.849-.849l2.98 2.98z"></svg:path>`,
})
export class WeuiDone2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
