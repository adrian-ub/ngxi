import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTheatherIcon],svg[whh-theather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h256q0 92-11.5 169.5T272.06 313t-68.5 112.5t-103.5 68.5q86 82 129 274h566q43-192 129-274q-60-22-103.5-68.5T752.06 313t-36.5-143.5T704.06 0h256q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-719-192q10 67 13 128h516q3-61 13-128zm143-832h256q0 148 30 256h-316q30-108 30-256"></svg:path>`,
})
export class WhhTheatherIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
