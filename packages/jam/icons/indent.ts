import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamIndentIcon],svg[jam-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 8h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m6-4h6a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M4.44 5.857L2.382 7.091a1 1 0 0 1-1.515-.857V3.766a1 1 0 0 1 1.515-.857l2.056 1.234a1 1 0 0 1 0 1.714z"></svg:path>`,
})
export class JamIndentIcon {
  readonly viewBox = input("-4.5 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
