import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerLeftUpSolidIcon],svg[mynaui-fat-corner-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.283 2.438a.75.75 0 0 0-1.008.013L3.489 9.704a.75.75 0 0 0 .511 1.3h4.064c.193 2.747 1.341 5.118 3.421 7.08c2.253 2.126 5.054 3.341 8.366 3.663a.75.75 0 0 0 .534-1.337c-2.793-2.188-4.196-4.004-4.515-5.438c-.309-1.393-.39-2.714-.252-3.969H20a.75.75 0 0 0 .497-1.312z"></svg:path>`,
})
export class MynauiFatCornerLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
