import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUnindentIcon],svg[jam-unindent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2m-6.44.143l2.057-1.234a1 1 0 0 1 1.515.857v2.468a1 1 0 0 1-1.515.857L.561 5.857a1 1 0 0 1 0-1.714z"></svg:path>`,
})
export class JamUnindentIcon {
  readonly viewBox = input("-5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
