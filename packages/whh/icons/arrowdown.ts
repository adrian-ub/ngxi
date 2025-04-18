import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhArrowdownIcon],svg[whh-arrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 1004L19 553Q0 534 0 507t19-45l90-92q19-19 45.5-19t45.5 19l184 185V64q0-26 18.5-45T448 0h127q27 0 45.5 19T639 64v492l185-186q19-19 45.5-19t45.5 19l90 92q19 18 19 45t-19 46l-448 451q-18 19-45 19t-45-19"></svg:path>`,
})
export class WhhArrowdownIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
