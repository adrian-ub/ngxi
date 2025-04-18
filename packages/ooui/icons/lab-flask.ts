import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLabFlaskIcon],svg[ooui-lab-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.61V3h1V1H6v2h1v4.61l-5.86 9.88A1 1 0 0 0 2 19h16a1 1 0 0 0 .86-1.51zm-4.2.88a1 1 0 0 0 .2-.6V3h2v4.89a1 1 0 0 0 .14.51l2.14 3.6H6.72z"></svg:path>`,
})
export class OouiLabFlaskIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
