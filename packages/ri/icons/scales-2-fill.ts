import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScales2FillIcon],svg[ri-scales-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8 8 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8 8 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3zm6 9a4 4 0 1 0 3.446 1.968l-2.739 2.74l-.094.082a1 1 0 0 1-1.32-1.497l2.739-2.74A4 4 0 0 0 11.998 11"></svg:path>`,
})
export class RiScales2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
