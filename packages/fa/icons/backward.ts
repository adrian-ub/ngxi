import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBackwardIcon],svg[fa-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1523 13q19-19 32-13t13 32v1472q0 26-13 32t-32-13L813 813q-9-9-13-19v710q0 26-13 32t-32-13L45 813q-19-19-19-45t19-45L755 13q19-19 32-13t13 32v710q4-10 13-19z"></svg:path>`,
})
export class FaBackwardIcon {
  readonly viewBox = input("0 0 1568 1536")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
