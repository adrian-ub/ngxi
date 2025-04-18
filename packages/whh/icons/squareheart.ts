import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSquareheartIcon],svg[whh-squareheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-224-832q-66 0-113 47t-47 113q0-66-47-113t-113-47t-113 47t-47 113q0 80 31 148.5t105 143.5l184 188l183-188q75-76 106-144t31-148q0-66-47-113t-113-47"></svg:path>`,
})
export class WhhSquareheartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
