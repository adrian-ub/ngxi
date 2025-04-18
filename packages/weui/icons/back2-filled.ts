import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBack2FilledIcon],svg[weui-back2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m1.999-6.563L10.68 12L14 8.562L12.953 7.5L9.29 11.277a1.045 1.045 0 0 0 0 1.446l3.663 3.777z"></svg:path>`,
})
export class WeuiBack2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
