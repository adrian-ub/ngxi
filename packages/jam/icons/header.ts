import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamHeaderIcon],svg[jam-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h4V1a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6H2v3a1 1 0 1 1-2 0V1a1 1 0 1 1 2 0z"></svg:path>`,
})
export class JamHeaderIcon {
  readonly viewBox = input("-8 -7 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
