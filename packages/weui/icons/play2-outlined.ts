import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPlay2OutlinedIcon],svg[weui-play2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.8a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0 1.2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1.3-7.165L15.236 12L10.7 9.165zm-.435-7.357l6.557 4.098a.5.5 0 0 1 0 .848l-6.557 4.098a.5.5 0 0 1-.765-.424V7.902a.5.5 0 0 1 .765-.424"></svg:path>`,
})
export class WeuiPlay2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
