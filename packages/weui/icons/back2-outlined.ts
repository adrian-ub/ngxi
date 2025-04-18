import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBack2OutlinedIcon],svg[weui-back2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m1.999-5.363L12.953 16.5L9.29 12.723a1.045 1.045 0 0 1 0-1.446L12.953 7.5L14 8.563L10.68 12L14 15.438z"></svg:path>`,
})
export class WeuiBack2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
