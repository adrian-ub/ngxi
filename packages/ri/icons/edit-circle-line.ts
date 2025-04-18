import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEditCircleLineIcon],svg[ri-edit-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.684 4.025a8 8 0 1 0 7.287 7.287a8 8 0 0 0-.603-2.439l1.5-1.502A9.94 9.94 0 0 1 22 11.997c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10q.378 0 .749.027a10 10 0 0 1 3.877 1.104L15.125 4.63a8 8 0 0 0-2.44-.604m7.801-1.928L21.9 3.511l-9.193 9.193l-1.412.002l-.002-1.416z"></svg:path>`,
})
export class RiEditCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
