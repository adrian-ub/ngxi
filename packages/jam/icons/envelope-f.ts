import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeFIcon],svg[jam-envelope-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.572.083L10.676 7.12a1 1 0 0 1-1.331 0L1.416.087A2 2 0 0 1 2 0h16a2 2 0 0 1 .572.083m1.356 1.385q.071.255.072.532v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 .072-.534l7.942 7.148a3 3 0 0 0 3.992 0z"></svg:path>`,
})
export class JamEnvelopeFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
