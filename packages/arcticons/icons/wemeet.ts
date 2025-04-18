import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWemeetIcon],svg[arcticons-wemeet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.002 34.553L5.547 30.08a3.58 3.58 0 0 1 0-5.062h0l11.478-11.525l6.974 7.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.002 34.553l7.024-7.052L24 34.505l6.975-7.004l6.975 7.004l4.502-4.52a3.58 3.58 0 0 0 0-5.062l-11.43-11.476l-13.997 14.054V13.49"></svg:path>`,
})
export class ArcticonsWemeetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
